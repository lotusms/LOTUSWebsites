'use client';

import React from 'react'
import PropTypes from 'prop-types'

function HeadingLeft({text, size = 'lg', weight = 'semibold', tracking="normal"}) {
  return (
    <div className="flex items-center gap-x-8">
      <h2 className={`small-heading text-center font-display text-${size} font-${weight} tracking-${tracking} sm:text-left`}>
        {text}
      </h2>
      <div className="h-px flex-auto heading-divider"></div>
    </div>
  )
}

HeadingLeft.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  weight: PropTypes.string,
  tracking: PropTypes.string,
}

export default HeadingLeft
