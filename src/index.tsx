import React, { Component, SFC } from 'react'
import appClass from './styles'
import logo from './assets/images/logo.svg'
import idx from 'idx'
import { ExternalLink } from './components'
import { render, hydrate } from 'react-dom'
import registerServiceWorker from './utilities/registerServiceWorker'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import OtherPage from './pages/OtherPage'

interface IUser {
  name?: string;
  friends?: IUser[];
}

interface IState {
  user?: IUser;
}

class App extends Component<{}, IState, any> {

  public state = {
    user: {
      name: 'Daniel',
      friends: [
        {
          name: 'Sarah',
        },
        {
          name: 'Judle'
        }
      ],
    },
  }

  public render() {
    return (
      <div className={ appClass }>
        <header>
          <img src={ logo } alt='logo' />
          <h1>Welcome to React</h1>
          { idx(this.state.user, _ => _.friends[1].name) }
        </header>
        <p>
          To get started, edit <code>src/App.tsx</code> and save to reload.
          <ExternalLink
            href='http://harrysolovay.com/'
            children='hello there'
          />
          <Link
            to='/other-page'
            children='internal link'
          />
        </p>
      </div>
    )
  }

}

const AppRouter: SFC<{}> = (props) => {
  return (
    <Router>
      <div>
        <Route exact={ true } path='/' component={ App } />
        <Route path='/other-page' component={ OtherPage } />
      </div>
    </Router>
  )
}

const root: HTMLElement | null = document.getElementById('root')

let shouldHydrate: boolean = false
if(root instanceof HTMLElement) {
  shouldHydrate = root.hasChildNodes()
}

if(shouldHydrate) {
  hydrate( <AppRouter />, root )
} else {
  render( <AppRouter />, root )
}

registerServiceWorker()