import React, {useEffect} from 'react'
import PropTypes from 'prop-types'

// Component
import UserItem from 'components/user-item'

const UsersList = ({users, onGetUsersList}) => {
  useEffect(() => {
    onGetUsersList()
  }, [onGetUsersList])

  return (
    <div>
      {users.map(({id, ...user}) => (
        <UserItem key={id} {...user} />
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
