'use client';

import React from 'react'
import { useMediaQuery } from 'react-responsive';

const MediaQuery = () => {

  const isXs = useMediaQuery({ maxWidth: 639 });
  const isSm = useMediaQuery({ minWidth: 640, maxWidth: 767 });
  const isMd = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isLg = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });
  const isXl = useMediaQuery({ minWidth: 1280, maxWidth: 1535 });
  const is2Xl = useMediaQuery({ minWidth: 1536 });

  const getCurrentBreakpoint = () => {
    if (isXs) return 'XS';
    if (isSm) return 'SM';
    if (isMd) return 'MD';
    if (isLg) return 'LG';
    if (isXl) return 'XL';
    if (is2Xl) return '2XL';
    return 'Unknown';
  };

  return (
    <div className="fixed bottom-4 right-4 text-[11px] p-1 bg-gray-800 text-white rounded-full z-[9999999]">
      {getCurrentBreakpoint()}
    </div>
  )
}

export default MediaQuery
