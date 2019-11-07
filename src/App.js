import React from 'react'
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom'

// Pages
import Conversation from 'pages/conversation'
import UsersList from 'pages/users-list'

const App = () => (
  <Router>
    <header>
      <h1>Title</h1>
      <nav>
        <Link to="/">Conversation</Link>
        <Link to="/users-list">Info</Link>
      </nav>
    </header>
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
  </Router>
)

export default App
