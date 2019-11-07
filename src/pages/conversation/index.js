import {connect} from 'react-redux'
import uuidv1 from 'uuid/v1'

// Component
import Conversation from './conversation'

// Actions
import {messageAdded} from 'redux/conversation/actions'

const mapStateToProps = ({conversation}) => ({
  messages: conversation.messages,
})

const mapDispatchToProps = dispatch => ({
  onSubmit: value => {
    const message = {
      id: uuidv1(),
      user: 'tester',
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
