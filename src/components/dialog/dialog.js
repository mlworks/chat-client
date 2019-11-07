import React from 'react'
import PropTypes from 'prop-types'

// SC
import DialogContentSC from './dialog-content-sc'
import DialogOverlaySC from './dialog-overlay-sc'

const Dialog = ({children}) => (
  <DialogOverlaySC>
    <DialogContentSC>{children}</DialogContentSC>
  </DialogOverlaySC>
)

Dialog.propTypes = {
  children: PropTypes.node,
}

export default Dialog
