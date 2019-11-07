import {connect} from 'react-redux'

// Component
import Conversation from './conversation'

const mapStateToProps = ({conversation}) => ({
  messages: conversation.messages,
})

export default connect(mapStateToProps)(Conversation)
