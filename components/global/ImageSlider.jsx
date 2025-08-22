'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useResizeObserver } from '@/hooks/useResizeObserver';
import Image from 'next/image';

const SliderCard = ({ 
  width, 
  imageWidth = "w-[350px]", 
  src = "", 
  alt, 
  cardClassName = "", 
  link,
  bgOffsetColor = "light" // default to "light"
}) => {
  const ringClass =
    bgOffsetColor === "dark"
      ? "ring-slate-100 ring-offset-blue-900"
      : "ring-slate-400 ring-offset-sky-50";

  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer nofollow"
      className={`flex shrink-0 items-center justify-center ${cardClassName}`} 
      style={{ width }} >
      <Image 
        className={`${imageWidth} mx-auto rounded-2xl my-2 bg-transparent 
        ring-1 ${ringClass} ring-offset-4 transition-all 
        duration-300 ease-in-out hover:ring-yellow-600 focus:ring-yellow-600`} 
        src={src} 
        alt={alt} 
        loading="lazy"
        width={350}
        height={250}
        sizes="(max-width: 768px) 100vw, 350px"
        style={{ objectFit: 'cover' }}
        quality={100}
      />
    </a>
  );
};


const ImageSlider = ({ slides, getImageSrc, imageWidth, arrows = true, cardClassName = "", bgOffsetColor="light" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);
  const totalSlides = slides.length;

  const updateSlidesToShow = (entry) => {
    const width = entry.contentRect.width;
    if (width >= 1024) {
      setSlidesToShow(4); // lg
    } else if (width >= 640) {
      setSlidesToShow(2); // sm
    } else {
      setSlidesToShow(1); // below sm
    }
  };

  useResizeObserver(sliderRef, updateSlidesToShow);

  const slidesWithClones = [
    ...slides.slice(-slidesToShow), // Cloned last slides at the beginning
    ...slides,
    ...slides.slice(0, slidesToShow) // Cloned first slides at the end
  ];

  const handleTransitionEnd = () => {
    setIsTransitioning(true);
    if (currentIndex >= totalSlides) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    } else if (currentIndex < 0) {
      setIsTransitioning(false);
      setCurrentIndex(totalSlides - 1);
    }
  };

  const prevSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  }, []);

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const getSlideWidth = () => 100 / slidesToShow;

  return (
    <div className='slidercontainer flex items-center justify-center flex-1 my-8'>
      {arrows && (
        <button
          className="arrow-button relative top-1/2 transform -translate-y-1/2 -left-4 p-2 rounded-full"
          onClick={prevSlide}>
          <ChevronLeftIcon className="size-6" />
        </button>
      )}

      <section className="relative w-full overflow-hidden" ref={sliderRef}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex + slidesToShow) * getSlideWidth()}%)`,
            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
          }}
          onTransitionEnd={handleTransitionEnd}>
          {slidesWithClones.map((slide, index) => (
            <SliderCard 
              key={index} 
              width={`${getSlideWidth()}%`}
              src={getImageSrc(slide)} 
              imageWidth={imageWidth}
              link={slide.url}
              bgOffsetColor={bgOffsetColor}
              cardClassName={cardClassName}
              alt={slide.name || `Slide ${index}`} />
          ))}
        </div>
      </section>

      {arrows && (
        <button
          className="arrow-button relative top-1/2 transform -translate-y-1/2 -right-4 p-2 rounded-full"
          onClick={nextSlide}>
          <ChevronRightIcon className="size-6" />
        </button>
      )}

      {/* SEO fallback: statically render client links in raw HTML */}
      <div className="hidden">
        <ul>
          {slides.map((slide, index) => (
            <li key={`seo-link-${index}`}>
              <a href={slide.url} rel="nofollow noopener noreferrer" target="_blank">
                {slide.name || slide.url}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

ImageSlider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    bgOffsetColor: PropTypes.string,
  })).isRequired,
  getImageSrc: PropTypes.func.isRequired,
  imageWidth: PropTypes.string,
  arrows: PropTypes.bool,
  width: PropTypes.string,
  link: PropTypes.string,
  bgOffsetColor: PropTypes.string,
  cardClassName: PropTypes.string,
};

SliderCard.propTypes = {
  width: PropTypes.string.isRequired,
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
  imageWidth: PropTypes.string,
  cardClassName: PropTypes.string,
  link: PropTypes.string,
  bgOffsetColor: PropTypes.string,
};

export default ImageSlider;
