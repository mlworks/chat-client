import {connect} from 'react-redux'

// Component
import UsersList from './users-list'

// Actions
import {loadUsersInfo} from 'redux/conversation/actions'

const mapStateToProps = ({conversation}) => ({
  users: conversation.users,
})

const mapDispatchToProps = dispatch => ({
  onGetUsersList: () => dispatch(loadUsersInfo()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList)
