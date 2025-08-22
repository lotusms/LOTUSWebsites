'use client';

import React from 'react'
import PropTypes from 'prop-types'

const GradientOverlay = ({opacity = "opacity-50", className = ""}) => {
  return (
    <div className={`absolute inset-0 bg-black ${opacity} ${className}`}></div>
  )
}

GradientOverlay.propTypes = {
  opacity: PropTypes.string,
  className: PropTypes.string,
}

export default GradientOverlay
