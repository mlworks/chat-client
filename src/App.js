import React from 'react'
import {Provider} from 'react-redux'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'

// Pages
import Conversation from 'pages/conversation'
import UsersList from 'pages/users-list'

// Styles
import GlobalStyle from 'global-styles.js'

// Store
import store from 'redux/store'

const App = () => (
  <Provider store={store}>
    <Router>
      <main>
        <Switch>
          <Route exact path="/">
            <Conversation />
          </Route>

          <Route path="/users-list">
            <div className="app-contents">
              <UsersList />
            </div>
          </Route>
        </Switch>
      </main>
      <GlobalStyle />
    </Router>
  </Provider>
)

export default App
