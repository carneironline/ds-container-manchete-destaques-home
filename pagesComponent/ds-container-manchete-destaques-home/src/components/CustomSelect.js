import React, { useState } from "react"
import "./CustomSelect.css"

function setOpenOnClick(setOpen, open) {
  setOpen(open)
}

function buildOption(option, isSelected, selectOption) {
  return (
    <span
      className={`custom-option ${isSelected ? "selected" : ""}`}
      data-value={option.id}
      onClick={() => selectOption(option)}
    >
      {option.svg}
      <div className="option-description">{option.description}</div>
    </span>
  )
}

function CustomSelect(props) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="select-wrapper"
      onClick={() => setOpenOnClick(setOpen, !open)}
    >
      <div className={`select ${open ? "open" : ""}`}>
        <div className="select__trigger">
          <span className="selected-option">
            {
              props.options.find(
                option => option.id === props.selectedOption.id
              ).svg
            }
            <div className="option-description">
              {props.selectedOption.description}
            </div>
          </span>
          <div className="arrow"></div>
        </div>
        <div className="custom-options">
          {props.options.map(option =>
            buildOption(
              option,
              props.selectedOption === option.id,
              props.setSelectedOption
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default CustomSelect
