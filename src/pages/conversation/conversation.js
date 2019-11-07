import React from 'react'
import PropTypes from 'prop-types'

// Components
import InputSubmit from 'components/input-submit'

class Conversation extends React.Component {
  componentDidMount() {
    this.props.onGetConversationHistory()
  }

  render() {
    const {messages, onSubmit} = this.props
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
}

// const Conversation = ({messages, onSubmit}) => (

// )

Conversation.propTypes = {
  messages: PropTypes.array,
  onGetConversationHistory: PropTypes.func,
  onSubmit: PropTypes.func,
}

export default Conversation
