import React from 'react'
import PropTypes from 'prop-types'

// SC
import AvatarSC from './avatar-sc'

const Avatar = ({alt, src}) => {
  if (!src) {
    return null
  }

  return <AvatarSC src={src} alt={alt} />
}

Avatar.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
}

export default Avatar
