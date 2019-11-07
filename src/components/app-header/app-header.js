import React from 'react'
import {Link} from 'react-router-dom'

// SC
import AppHeaderSC from './app-header-sc'

const AppHeader = ({endActions, startActions, title}) => (
  <AppHeaderSC>
    <div className="app-contents">
      <div className="c-app-header__start">{startActions}</div>
      <div className="c-app-header__title">
        <h1>{title}</h1>
      </div>
      <div className="c-app-header__end">{endActions}</div>
    </div>
  </AppHeaderSC>
)

export default AppHeader
