import React from 'react'
import PropTypes from 'prop-types'
import {format} from 'date-fns'

// SC
import MessageWrapperSC from './message-wrapper-sc'

const Message = ({content, isOutgoing, timestamp}) => (
  <MessageWrapperSC isOutgoing={isOutgoing}>
    <div className="c-message__avatar">avatar</div>
    <div className="c-message__bubble">
      <div className="c-message__content">{content}</div>
      <div className="c-message__time">{format(timestamp, 'HH:mm')}</div>
    </div>
  </MessageWrapperSC>
)

Message.propTypes = {
  content: PropTypes.string,
  isOutgoing: PropTypes.bool,
  timestamp: PropTypes.number,
}

export default Message
