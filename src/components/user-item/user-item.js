import React from 'react'
import PropTypes from 'prop-types'

// Component
import Avatar from 'components/avatar'

// SC
import UserItemWrapperSC from './user-item-wrapper-sc'

const UserItem = ({avatarUrl, name}) => (
  <UserItemWrapperSC>
    <div className="c-user-item__avatar">
      <Avatar src={avatarUrl} alt={name} />
    </div>
    <div className="c-user-item__name">{name}</div>
  </UserItemWrapperSC>
)

UserItem.propTypes = {
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
}

export default UserItem
