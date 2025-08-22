'use client';

import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

const variantClasses = {
  gradient: 'bg-gradient-to-br from-blue-600 to-indigo-900 p-6 text-slate-50 sm:p-8 bg-no-repeat bg-auto-100 bg-position sm:bg-position-sm ring-1 ring-amber-500 ring-offset-4',
  custom: 'rounded-2xl p-6 ring-1 ring-amber-500 ring-offset-4 ring-offset-slate-50 transition-transform duration-300 bg-slate-300 text-slate-700 sm:p-8 bg-no-repeat bg-auto-100 bg-position sm:bg-position-sm',
  bronze: 'bg-amber-600/80 p-6 sm:p-8',
  silver: 'bg-slate-300 p-6 sm:p-8',
  gold: 'bg-amber-500/80 p-6 sm:p-8',
  dark: 'bg-slate-900 p-6 text-slate-50 sm:p-8',
  light: 'bg-slate-50 p-6 text-slate-900 sm:p-8',
};

const Card = ({ children, variant, svgBackground = "", className= "", heightMatch = false }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (heightMatch) {
      const updateHeights = () => {
        const cardElements = document.querySelectorAll('.exactheight');
        let maxHeight = 0;
        cardElements.forEach(card => {
          card.style.minHeight = 'auto';           
          const cardHeight = card.offsetHeight;
          if (cardHeight > maxHeight) {
            maxHeight = cardHeight;
          }
        });
        cardElements.forEach(card => {
          card.style.minHeight = `${maxHeight}px`; 
        });
      };

      const resizeObserver = new ResizeObserver(updateHeights);
      resizeObserver.observe(cardRef.current);

      window.addEventListener('resize', updateHeights);

      // Initial call to set the heights correctly
      updateHeights();

      return () => {
        resizeObserver.disconnect();
        window.removeEventListener('resize', updateHeights);
      };
    }
  }, [heightMatch]);

  const variantClass = variantClasses[variant] || "";
  const style = svgBackground ? { backgroundImage: `url(${svgBackground})` } : {};

  return (
    <article ref={cardRef} className={`${variantClass} ${className} card`} style={style}>
      {children}
    </article>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  svgBackground: PropTypes.string,
  variant: PropTypes.oneOf(['gradient', 'dark', 'light', 'blue', 'custom', 'slate', 'bronze', 'silver', 'gold']),
  heightMatch: PropTypes.bool,
  props: PropTypes.object,
};


export default Card;
