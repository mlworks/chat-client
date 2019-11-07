import React, {useEffect} from 'react'
import PropTypes from 'prop-types'

// Components
import InputSubmit from 'components/input-submit'

const Conversation = ({
  currentUser,
  messages,
  onGetConversationHistory,
  onMessageSubmit,
  onUserSubmit,
}) => {
  useEffect(() => {
    if (currentUser) {
      onGetConversationHistory()
    }
  }, [currentUser, onGetConversationHistory])

  return (
    <div>
      {!currentUser && <InputSubmit onSubmit={onUserSubmit} />}

      {messages.map(message => (
        <p key={message.id}>{message.content}</p>
      ))}
      <div>
        <InputSubmit onSubmit={onMessageSubmit} />
      </div>
    </div>
  )
}

Conversation.propTypes = {
  currentUser: PropTypes.string,
  messages: PropTypes.array,
  onGetConversationHistory: PropTypes.func,
  onMessageSubmit: PropTypes.func,
  onUserSubmit: PropTypes.func,
}

export default Conversation
