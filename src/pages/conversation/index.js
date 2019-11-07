import {connect} from 'react-redux'

// Component
import Conversation from './conversation'

// Actions
import {
  createUser,
  sendMessage,
  openConversation,
} from 'redux/conversation/actions'

const mapStateToProps = ({conversation}) => ({
  currentUser: conversation.currentUser,
  messages: conversation.messages,
})

const mapDispatchToProps = dispatch => ({
  onGetConversationHistory: () => dispatch(openConversation()),
  onMessageSubmit: value => dispatch(sendMessage(value)),
  onUserSubmit: name => dispatch(createUser(name)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Conversation)
