'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useResizeObserver } from '@/hooks/useResizeObserver';
import Image from 'next/image';

const Slider = ({ slides, className= "", sliderClassName = ""}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);
  const totalSlides = slides.length;

  const updateSlidesToShow = (entry) => {
    const width = entry.contentRect.width;
    if (width >= 1024) {
      setSlidesToShow(5); // lg
    } else if (width >= 640) {
      setSlidesToShow(4); // md
    } else if (width >= 400) {
      setSlidesToShow(3); // sm
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
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const getSlideWidth = () => 100 / slidesToShow;

  const SliderImage = ({ imagelight, name }) => (
    <Image 
      className="w-[120px] mx-auto" 
      src={imagelight} 
      alt={name} 
      fill 
      priority 
      sizes="100vw" 
      style={{ objectFit: 'cover' }} 
      quality={100} 
      loading="lazy"
      placeholder="blur" 
      blurDataURL={imagelight} />
  );

  SliderImage.propTypes = {
    imagelight: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

  return (
    <div className={`flex items-center justify-center flex-1 ${className}`}>
      <button
        className="arrow-button relative top-1/2 transform -translate-y-1/2 -left-4 p-2 rounded-full"
        onClick={prevSlide}>
        <ChevronLeftIcon className="size-6" />
      </button>

      <section className={`relative w-full overflow-hidden ${sliderClassName}`} ref={sliderRef}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex + slidesToShow) * getSlideWidth()}%)`,
            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
          }}
          onTransitionEnd={handleTransitionEnd}>
          {slidesWithClones.map((slide, index) => (
            <div 
              key={index} 
              className="flex shrink-0 items-center justify-center" 
              style={{ width: `${getSlideWidth()}%` }}>
              <SliderImage imagelight={slide.imagelight} name={slide.name} />
            </div>
          ))}
        </div>
      </section>

      <button
        className="arrow-button relative top-1/2 transform -translate-y-1/2 -right-4 p-2 rounded-full"
        onClick={nextSlide}>
        <ChevronRightIcon className="size-6" />
      </button>
    </div>
  );
};

Slider.propTypes = {
  slides: PropTypes.array.isRequired,
  className: PropTypes.string,
  sliderClassName: PropTypes.string,
};

export default Slider;