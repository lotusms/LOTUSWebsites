'use client';

import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const ImageSection = ({ children, className = "", image }) => {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px', // Preload just before in view
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`image-section bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${className}`}
      style={{
        backgroundImage: loaded ? `url(${image})` : 'none',
        opacity: loaded ? 1 : 0,
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
};

ImageSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  image: PropTypes.string
};

export default ImageSection;
