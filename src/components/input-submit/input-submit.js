import React, {useState} from 'react'
import PropTypes from 'prop-types'

const InputSubmit = ({onSubmit}) => {
  const [value, setValue] = useState('')

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        onSubmit(value)
        setValue('')
      }}
    >
      <input
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <button type="submit" disabled={!value}>
        Send
      </button>
    </form>
  )
}

InputSubmit.propTypes = {
  onSubmit: PropTypes.func,
}

InputSubmit.defaultProps = {
  onSubmit: () => {},
}

export default InputSubmit
