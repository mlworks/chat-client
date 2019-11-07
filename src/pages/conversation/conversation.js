import React from 'react'
import PropTypes from 'prop-types'

const Conversation = ({messages}) => (
  <div>
    {messages.map(message => (
      <p key={message.id}>{message.content}</p>
    ))}
    <div>input</div>
  </div>
)

Conversation.propTypes = {
  messages: PropTypes.array,
}

Conversation.defaultProps = {
  messages: [],
}

export default Conversation
