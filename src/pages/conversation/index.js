import {connect} from 'react-redux'
import uuidv1 from 'uuid/v1'

// Component
import Conversation from './conversation'

// Actions
import {
  createUser,
  messageAdded,
  openConversation,
} from 'redux/conversation/actions'

const mapStateToProps = ({conversation}) => ({
  currentUser: conversation.currentUser,
  messages: conversation.messages,
})

const mapDispatchToProps = dispatch => ({
  onGetConversationHistory: () => dispatch(openConversation()),
  onMessageSubmit: value => {
    const message = {
      id: uuidv1(),
      userId: 'tester',
      content: value,
      timestamp: new Date().getTime(),
    }
    dispatch(messageAdded(message))
  },
  onUserSubmit: name => dispatch(createUser(name)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Conversation)
