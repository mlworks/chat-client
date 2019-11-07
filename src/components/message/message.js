import React from 'react'
import PropTypes from 'prop-types'
import {format} from 'date-fns'

// Component
import Avatar from 'components/avatar'

// SC
import MessageWrapperSC from './message-wrapper-sc'

const Message = ({avatarUrl, content, isOutgoing, name, timestamp}) => (
  <MessageWrapperSC isOutgoing={isOutgoing}>
    <div className="c-message__avatar">
      <Avatar src={avatarUrl} alt={name} />
    </div>
    <div className="c-message__bubble">
      <div className="c-message__content">{content}</div>
      <div className="c-message__time">{format(timestamp, 'HH:mm')}</div>
    </div>
  </MessageWrapperSC>
)

Message.propTypes = {
  avatarUrl: PropTypes.string,
  content: PropTypes.string,
  isOutgoing: PropTypes.bool,
  name: PropTypes.string,
  timestamp: PropTypes.number,
}

export default Message
