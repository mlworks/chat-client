import {connect} from 'react-redux'

// Component
import Conversation from './conversation'

// Actions
import {
  createUser,
  debugMessage,
  sendMessage,
  openConversation,
} from 'redux/conversation/actions'

const mapStateToProps = ({conversation}) => ({
  currentUser: conversation.currentUser,
  messages: conversation.messages,
  title: conversation.title,
})

const mapDispatchToProps = dispatch => ({
  onDebugMessageSubmit: () => dispatch(debugMessage()),
  onGetConversationHistory: () => dispatch(openConversation()),
  onMessageSubmit: value => dispatch(sendMessage(value)),
  onUserSubmit: name => dispatch(createUser(name)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Conversation)
