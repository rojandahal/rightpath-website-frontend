import { useState, forwardRef } from 'react'

export const SelectInput = forwardRef((props, ref) => {
  const {
    options,
    defaultOption,
    initialValue,
    watchText,
    className,
    displayLabel = true,
    label,
    ...rest
  } = props

  return (
    <div
    >
      {label && label}
      <div className="select--wrapper">
        <select className="input" {...rest} ref={ref}>
          {defaultOption && (
            <option value={initialValue ?? ''} defaultValue disabled>
              {defaultOption}
            </option>
          )}
          {options?.map(opt => (
            <option value={opt?.value} key={opt?.value}>
              {opt?.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
})
