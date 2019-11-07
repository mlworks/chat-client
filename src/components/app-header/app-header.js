import React from 'react'
import {Link} from 'react-router-dom'

// SC
import AppHeaderSC from './app-header-sc'

const AppHeader = () => (
  <AppHeaderSC>
    <h1>Title</h1>
    <nav>
      <Link to="/">Conversation</Link>
      <Link to="/users-list">Info</Link>
    </nav>
  </AppHeaderSC>
)

export default AppHeader
