import React, {useState} from 'react'
import PropTypes from 'prop-types'

const InputSubmit = ({id, label, submitText, onSubmit, ...props}) => {
  const [value, setValue] = useState('')

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        onSubmit(value)
        setValue('')
      }}
    >
      <label htmlFor={id}>{label}</label>
      <input
        {...props}
        id={id}
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <button type="submit" disabled={!value}>
        {submitText}
      </button>
    </form>
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
