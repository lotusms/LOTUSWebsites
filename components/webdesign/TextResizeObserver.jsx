import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

const ResponsiveText = ({ children, min = 14, max = 32 }) => {
  const ref = useRef(null);
  const [fontSize, setFontSize] = useState(min);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const resizeObserver = new ResizeObserver(([entry]) => {
      const height = entry.contentRect.height;
      const size = Math.min(max, Math.max(min, height / 12));
      setFontSize(size);
    });

    resizeObserver.observe(el);
    return () => resizeObserver.disconnect();
  }, [min, max]);

  return (
    <div ref={ref} style={{ fontSize: `${fontSize}px`, lineHeight: 1.2 }}>
      {children}
    </div>
  );
};

ResponsiveText.propTypes = {
  children: PropTypes.node.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default ResponsiveText;