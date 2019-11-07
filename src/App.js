import React from 'react'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'

// Components
import AppHeader from 'components/app-header'

// Pages
import Conversation from 'pages/conversation'
import UsersList from 'pages/users-list'

// Styles
import GlobalStyle from 'global-styles.js'

const App = () => (
  <Router>
    <AppHeader />
    <main>
      <Switch>
        <Route exact path="/">
          <Conversation />
        </Route>

        <Route path="/users-list">
          <UsersList />
        </Route>
      </Switch>
    </main>
    <GlobalStyle />
  </Router>
)

export default App
