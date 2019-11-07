import React, {useState} from 'react'
import PropTypes from 'prop-types'

// SC
import InputSubmitSC from './input-submit-sc'

const InputSubmit = ({id, label, submitText, onSubmit, ...props}) => {
  const [value, setValue] = useState('')

  return (
    <InputSubmitSC
      onSubmit={event => {
        event.preventDefault()
        onSubmit(value)
        setValue('')
      }}
    >
      <label className="c-input-submit__label" htmlFor={id}>
        {label}
      </label>
      <div className="c-input-submit__controls">
        <input
          {...props}
          className="c-input-submit__input"
          id={id}
          type="text"
          value={value}
          onChange={event => setValue(event.target.value)}
        />
        <button
          className="c-input-submit__button"
          type="submit"
          disabled={!value}
        >
          {submitText}
        </button>
      </div>
    </InputSubmitSC>
  )
}

InputSubmit.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  submitText: PropTypes.string,
  onSubmit: PropTypes.func,
}

InputSubmit.defaultProps = {
  submitText: 'Submit',
  onSubmit: () => {},
}

export default InputSubmit
