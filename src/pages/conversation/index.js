import {connect} from 'react-redux'
import uuidv1 from 'uuid/v1'

// Component
import Conversation from './conversation'

// Actions
import {messageAdded, openConversation} from 'redux/conversation/actions'

const mapStateToProps = ({conversation}) => ({
  messages: conversation.messages,
})

const mapDispatchToProps = dispatch => ({
  onGetConversationHistory: () => dispatch(openConversation()),
  onSubmit: value => {
    const message = {
      id: uuidv1(),
      userId: 'tester',
      content: value,
      timestamp: new Date().getTime(),
    }
    dispatch(messageAdded(message))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Conversation)
