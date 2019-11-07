import {connect} from 'react-redux'

// Component
import Message from 'components/message'

const mapStateToProps = ({conversation}, {userId}) => {
  const user = conversation.users.find(user => user.id === userId) || {}
  return {
    avatarUrl: user.avatarUrl,
    name: user.name,
  }
}

export default connect(mapStateToProps)(Message)
