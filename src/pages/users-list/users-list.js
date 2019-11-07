import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

// Components
import AppHeader from 'components/app-header'
import UserItem from 'components/user-item'

const UsersList = ({title, users, onGetUsersList}) => {
  useEffect(() => {
    onGetUsersList()
  }, [onGetUsersList])

  return (
    <React.Fragment>
      <AppHeader
        title={`Users in ${title}`}
        startActions={<Link to="/">Back</Link>}
      />
      <div className="app-contents">
        {users.map(({id, ...user}) => (
          <UserItem key={id} {...user} />
        ))}
      </div>
    </React.Fragment>
  )
}

UsersList.propTypes = {
  title: PropTypes.string,
  users: PropTypes.array,
  onGetUsersList: PropTypes.func,
}

UsersList.defaultProps = {
  users: [],
}

export default UsersList
