import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

const ResponsiveBackgroundNumber = ({ children }) => {
  const ref = useRef(null);
  const [fontSize, setFontSize] = useState("4rem");

  useEffect(() => {
    const el = ref.current?.parentElement; 
    if (!el) return;

    const resizeObserver = new ResizeObserver(([entry]) => {
      const height = entry.contentRect.height;
      const size = Math.max(24, height * 1.5); 
      setFontSize(`${size}px`);
    });

    resizeObserver.observe(el);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <p
      ref={ref}
      style={{ fontSize }}
      className="absolute -top-8 sm:top-0 md:-top-4 left-2 font-sfBold text-slate-900/10 leading-none">
      {children}
    </p>
  );
};

ResponsiveBackgroundNumber.propTypes = {
  children: PropTypes.node.isRequired,
};  

export default ResponsiveBackgroundNumber;