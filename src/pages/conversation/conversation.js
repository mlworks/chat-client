import React from 'react'
import PropTypes from 'prop-types'

// Components
import InputSubmit from 'components/input-submit'

const Conversation = ({messages, onSubmit}) => (
  <div>
    {messages.map(message => (
      <p key={message.id}>{message.content}</p>
    ))}
    <div>
      <InputSubmit onSubmit={onSubmit} />
    </div>
  </div>
)

Conversation.propTypes = {
  messages: PropTypes.array,
  onSubmit: PropTypes.func,
}

Conversation.defaultProps = {
  messages: [],
}

export default Conversation
