import React from 'react'
import PropTypes from 'prop-types'

const InputField = ({label, value, type, min = 0, step = 100, onChange, labelclassName = "text-slate-200", disabled = false}) => {
  return (
    <>
      {disabled 
      ?
        (
          <div>
            {label && (
              <label className={`text-xl font-sfHeavy mb-1 ${labelclassName}`}>
                {label}
              </label>
            )}
            <div className="w-full rounded-md bg-gray-100 text-gray-500 py-2 pl-3 pr-4 mt-1 text-left shadow-sm border border-gray-300 sm:text-sm">
              {value}
            </div>
          </div>
        )
      : 
        (
          <div>
            {label && (
              <label className={`text-xl font-sfHeavy mb-1 ${labelclassName}`}>
                {label}
              </label>
            )}
            <input
              type={type}
              min={type === 'number' ? 0 : min}
              step={type === 'number' ? 100 : step}
              className="w-full rounded-md bg-white text-slate-800 py-2 pl-3 pr-4 mt-1 text-left shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-500 sm:text-sm"
              value={value}
              onChange={onChange}
            />
          </div>
        )
      }      
    </>    
  )
}

InputField.propTypes = {
  label: PropTypes.string,
  labelclassName: PropTypes.string,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  min: PropTypes.number,
  step: PropTypes.number,
  disabled: PropTypes.bool,
}

export default InputField