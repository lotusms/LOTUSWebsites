'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useResizeObserver } from '@/hooks/useResizeObserver';
import Image from 'next/image';

const ColoredSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(slides.length);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const sliderRef = useRef(null);

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

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex >= slides.length + slidesToShow) {
      sliderRef.current.style.transition = 'none';
      setCurrentIndex(slidesToShow);
      requestAnimationFrame(() => {
        sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
      });
    } else if (currentIndex < slidesToShow) {
      sliderRef.current.style.transition = 'none';
      setCurrentIndex(slides.length + currentIndex);
      requestAnimationFrame(() => {
        sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
      });
    }
  };

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  }, [isTransitioning]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); 

    return () => {
      clearInterval(interval);
    };
  }, [nextSlide]); 

  const getSlideWidth = () => {
    return 100 / slidesToShow;
  };

  return (
    <div className='slidercontainer flex items-center justify-center flex-1 my-8'>
      <button
        className="arrow-button relative top-1/2 transform -translate-y-1/2 -left-4 p-2 rounded-full"
        onClick={prevSlide} >
        <ChevronLeftIcon className="size-6" />
      </button>

      <section className="relative w-full overflow-hidden my-4" ref={sliderRef}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * getSlideWidth()}%)` }}
          onTransitionEnd={handleTransitionEnd} >
          {slides.slice(-slidesToShow).map((slide, index) => (
            <div key={`clone-start-${index}`} className="flex shrink-0 items-center justify-center" style={{ width: `${getSlideWidth()}%` }}>
              <Image
                className="w-[150px] mx-auto"
                src={slide.image}
                alt={slide.name}
                width={150}
                height={150}
              />
            </div>
          ))}
          {slides.map((slide, index) => (
            <div key={index} className="flex shrink-0 items-center justify-center" style={{ width: `${getSlideWidth()}%` }}>
              <Image
                className="w-[150px] mx-auto"
                src={slide.image}
                alt={slide.name}
                width={150}
                height={150}
              />
            </div>
          ))}
          {slides.slice(0, slidesToShow).map((slide, index) => (
            <div key={`clone-end-${index}`} className="flex shrink-0 items-center justify-center" style={{ width: `${getSlideWidth()}%` }}>
              <Image
                className="w-[150px] mx-auto"
                src={slide.image}
                alt={slide.name}
                width={150}
                height={150}
              />
            </div>
          ))}
        </div>
      </section>

      <button
        className="arrow-button relative top-1/2 transform -translate-y-1/2 -right-4 p-2 rounded-full"
        onClick={nextSlide} >
        <ChevronRightIcon className="size-6" />
      </button>
    </div>
  );
};

ColoredSlider.propTypes = {
  slides: PropTypes.array.isRequired,
};

export default ColoredSlider;
