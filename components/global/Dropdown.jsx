"use client"

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react"
import { ChevronUpDownIcon } from "@heroicons/react/20/solid"
import { CheckIcon } from "@heroicons/react/20/solid"
import PropTypes from "prop-types"

export default function Dropdown({ label, options, selected, onChange, labelclassName = "text-slate-200"}) {
  return (
    <div>
      {label && (
        <label className={`text-xl font-sfHeavy mb-1 ${labelclassName}`}>
          {label}
        </label>
      )}

      <Listbox value={selected} onChange={onChange}>
        <div className="relative mt-1">
          {/* Selected value */}
          <ListboxButton className="w-full cursor-default rounded-md bg-white text-slate-800 py-2 pl-3 pr-8 text-left shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-500 sm:text-sm">
            <span className="block truncate">{selected}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronUpDownIcon className="h-5 w-5 text-slate-800" aria-hidden="true" />
            </span>
          </ListboxButton>

          {/* Dropdown options */}
          <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {options.map((option) => (
              <ListboxOption
                key={option}
                value={option}
                className="relative cursor-default select-none py-2 pl-10 pr-4 text-gray-900 hover:bg-lime-100"
              >
                <span
                  className={`block truncate ${
                    selected === option ? "font-semibold" : "font-normal"
                  }`}
                >
                  {option}
                </span>

                {/* Checkmark for selected option */}
                {selected === option && (
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-lime-600">
                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  )
}

Dropdown.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  labelclassName: PropTypes.string,
}
