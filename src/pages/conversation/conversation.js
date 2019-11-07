import React, {useEffect} from 'react'
import PropTypes from 'prop-types'

// Components
import Dialog from 'components/dialog'
import InputSubmit from 'components/input-submit'
import Message from 'components/message'

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
      {!currentUser && (
        <Dialog>
          <InputSubmit
            id="user-name"
            label="Please input your name to login"
            onSubmit={onUserSubmit}
          />
        </Dialog>
      )}
      {messages.map(message => (
        <Message
          key={message.id}
          content={message.content}
          isOutgoing={message.userId === currentUser}
          timestamp={message.timestamp}
        />
      ))}
      <div>
        <InputSubmit
          id="compose-message"
          label="Compose message"
          placeholder="Compose new message here..."
          submitText="Send"
          onSubmit={onMessageSubmit}
        />
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
