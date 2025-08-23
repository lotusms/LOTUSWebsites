'use client';

import React from 'react'
import PropTypes from 'prop-types'

const ImageHeader = ({wordone, wordtwo, className = "", backgroundImage, subtitle, overlay, backgroundPosition= '0% 0%'}) => {
  return (
    <div 
      className={`relative image-header py-64 ${className}`} 
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition 
      }}>
      {overlay && <div className="absolute inset-0 bg-black bg-opacity-40"></div>}
      
      <div className="absolute inset-0 flex items-center justify-center mx-auto sm:mx-24 px-8">
        <div className="relative z-10 max-w-7xl px-8">
          <h1 className="font-sfHeavy text-5xl lg:text-8xl font-bold text-slate-200 uppercase">
            {wordone}
            <br/>
            <span className="ml-3 text-lime-500">{wordtwo}</span>
          </h1>
          <p className="font-sfHeavy text-slate-200/70 text-xl md:text-2xl mt-4">
            {String(subtitle)}
          </p>
        </div>
      </div>
    </div>
  )
}

ImageHeader.propTypes = {
  className: PropTypes.string,
  backgroundImage: PropTypes.string.isRequired,
  wordone: PropTypes.string.isRequired,
  wordtwo: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  overlay: PropTypes.bool,
  backgroundPosition: PropTypes.string
}

export default ImageHeader
