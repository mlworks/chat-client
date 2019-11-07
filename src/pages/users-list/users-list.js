import React from 'react'
import PropTypes from 'prop-types'

const UsersList = ({users}) => (
  <div>
    {users.map(user => (
      <p key={user.id}>{user.name}</p>
    ))}
  </div>
)

UsersList.propTypes = {
  users: PropTypes.array,
}

UsersList.defaultProps = {
  users: [],
}

export default UsersList
