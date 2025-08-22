'use client';

import React from 'react'
import PropTypes from 'prop-types'

const LargeListItem = ({bullettitle= "", bullettext = "", className = ""}) => {
  return (
    <li className="group mt-10 first:mt-0">
      <div>
        <div className={`large-list-divider pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute  before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px         
        ${className}`}>
          <strong className="font-semibold">{bullettitle} </strong>
          <span className="">{bullettext}</span>
        </div>
      </div>
    </li>
  )
}

LargeListItem.propTypes = {
  bullettitle: PropTypes.string,
  bullettext: PropTypes.string,
  className: PropTypes.string,
}

export default LargeListItem
