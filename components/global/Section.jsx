'use client';

import React from 'react'
import PropTypes from 'prop-types'

const variantClasses = {
  gradient: 'bg-gradient-to-b from-blue-600 to-indigo-900 text-cyan-50 relative z-20',
  gradientdark: 'bg-gradient-to-b from-black via-slate-800 to-slate-700 text-cyan-50 relative z-20',
  light: 'bg-gradient-to-br from-sky-50 to-slate-100 text-slate-950 relative z-20',
  lime: 'bg-lime-600 text-slate-800 relative z-20',
  slate: 'bg-slate-800 text-slate-50 relative z-20',
};

const borderClasses = {
  lime_on_dark: 'ring-4 ring-lime-600 ring-offset-8 ring-offset-slate-700',
  lime_on_light: 'ring-4 ring-lime-600 ring-offset-8 ring-offset-slate-200',
  slate: 'ring-4 ring-slate-800 ring-offset-8 ring-offset-slate-700',
}

const Section = ({children, variant, className = "", border = ""}) => {
  const variantClass = variantClasses[variant];
  const borderClass = borderClasses[border];

  return (
    <div className={`${variantClass} py-4 ${className} ${borderClass}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          {children}
        </div>
      </div>
    </div>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['gradient', 'gradientdark', 'light', 'lime', 'slate']),
  border: PropTypes.oneOf(['lime_on_dark', 'lime_on_light', 'slate']),
}

export default Section
