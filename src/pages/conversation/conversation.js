import React, {useEffect} from 'react'
import PropTypes from 'prop-types'

// Components
import Dialog from 'components/dialog'
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
        <p key={message.id}>{message.content}</p>
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
