import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

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
  onDebugMessageSubmit,
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
            <TransitionGroup component={null}>
              {messages.map(message => (
                <CSSTransition
                  key={message.id}
                  timeout={200}
                  classNames="message-transition"
                >
                  <Message
                    isOutgoing={message.userId === currentUser}
                    {...message}
                  />
                </CSSTransition>
              ))}
            </TransitionGroup>
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
            <button type="button" onClick={onDebugMessageSubmit}>
              Debug add message
            </button>
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
  onDebugMessageSubmit: PropTypes.func,
  onGetConversationHistory: PropTypes.func,
  onMessageSubmit: PropTypes.func,
  onUserSubmit: PropTypes.func,
}

export default Conversation
