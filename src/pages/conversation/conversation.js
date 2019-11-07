import React, {useEffect} from 'react'
import PropTypes from 'prop-types'

// Components
import InputSubmit from 'components/input-submit'

const Conversation = ({messages, onGetConversationHistory, onSubmit}) => {
  useEffect(() => {
    onGetConversationHistory()
  }, [onGetConversationHistory])

  return (
    <div>
      {messages.map(message => (
        <p key={message.id}>{message.content}</p>
      ))}
      <div>
        <InputSubmit onSubmit={onSubmit} />
      </div>
    </div>
  )
}

Conversation.propTypes = {
  messages: PropTypes.array,
  onGetConversationHistory: PropTypes.func,
  onSubmit: PropTypes.func,
}

export default Conversation
