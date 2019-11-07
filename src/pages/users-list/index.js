import {connect} from 'react-redux'

// Component
import UsersList from './users-list'

const mapStateToProps = ({conversation}) => ({
  users: conversation.users,
})

export default connect(mapStateToProps)(UsersList)
