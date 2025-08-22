'use client';

import React from 'react'
import PropTypes from 'prop-types'
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid'

const Alert = ({title = "", content}) => {
  return (
    <div className="rounded-md bg-yellow-50 p-4">
      <div className="flex items-center py-2">
        <div className="shrink-0">
          <ExclamationTriangleIcon className="size-5 text-yellow-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">{title}</h3>
          <div className="text-sm text-yellow-700">
            <p> {content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

Alert.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string.isRequired,
}

export default Alert
