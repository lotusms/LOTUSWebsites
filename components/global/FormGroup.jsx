'use client';

import PropTypes from 'prop-types'

const FormGroup = ({name, label, type, value, onChange, textarea, required, textareacontent, placeholder, botfield}) => {
  return (
    <div className="mt-5 sm:mt-6">
      <label htmlFor={name} className={`block text-base font-medium mb-1 ${botfield ? "text-red-600" : "text-slate-50"}`}> 
        {label} 
        {required && <span className="text-red-600 ml-1">*</span>}
      </label>
      {textarea 
        ? <textarea 
            type={type} 
            id={name} 
            name={name} 
            value={value}
            onChange={onChange}
            required={required}
            aria-required={required}
            autoComplete='new-password'
            className={`block w-full px-3 py-2 
            text-slate-50 bg-slate-950
            placeholder-lightgray ${botfield ? "h-18" : "h-36"}`} 
            placeholder={placeholder ? placeholder : ""}> 
            {textareacontent}
          </textarea>
        :<input 
          type={type} 
          id={name} 
          name={name} 
          value={value}
          onChange={onChange}
          required={required}
          aria-required={required}  
          autoComplete='new-password'
          className="block w-full px-3 py-2
          text-slate-50 bg-slate-950
          placeholder-lightgray" 
          placeholder={placeholder ? placeholder : ""} />
      }
      
    </div>
  )
}

FormGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  textarea: PropTypes.bool,
  textareacontent: PropTypes.string,
  botfield: PropTypes.bool
}

export default FormGroup
