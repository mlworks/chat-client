import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

// Components
import AppHeader from 'components/app-header'
import Dialog from 'components/dialog'
import InputSubmit from 'components/input-submit'
import Message from './connected-message'

// SC
import ConversationSC from './conversation-sc'

const Conversation = ({
  currentUser,
  messages,
  title,
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
    <React.Fragment>
      <AppHeader
        title={title}
        endActions={<Link to="/users-list">Info</Link>}
      />
      <ConversationSC>
        {!currentUser && (
          <Dialog>
            <InputSubmit
              autoFocus
              id="user-name"
              label="Please input your name to login"
              onSubmit={onUserSubmit}
            />
          </Dialog>
        )}
        <div className="t-conversation__messages">
          <div className="app-contents">
            {messages.map(message => (
              <Message
                key={message.id}
                isOutgoing={message.userId === currentUser}
                {...message}
              />
            ))}
          </div>
        </div>
        <div className="t-conversation__compose">
          <div className="app-contents">
            <InputSubmit
              id="compose-message"
              label="Compose message"
              placeholder="Compose new message here..."
              submitText="Send"
              onSubmit={onMessageSubmit}
            />
          </div>
        </div>
      </ConversationSC>
    </React.Fragment>
  )
}

Conversation.propTypes = {
  currentUser: PropTypes.string,
  messages: PropTypes.array,
  title: PropTypes.string,
  onGetConversationHistory: PropTypes.func,
  onMessageSubmit: PropTypes.func,
  onUserSubmit: PropTypes.func,
}

export default Conversation
