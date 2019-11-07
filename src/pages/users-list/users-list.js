import React, {useEffect} from 'react'
import PropTypes from 'prop-types'

const UsersList = ({users, onGetUsersList}) => {
  useEffect(() => {
    onGetUsersList()
  }, [onGetUsersList])

  return (
    <div>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  )
}

UsersList.propTypes = {
  users: PropTypes.array,
  onGetUsersList: PropTypes.func,
}

UsersList.defaultProps = {
  users: [],
}

export default UsersList
