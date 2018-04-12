import React     from 'react'
import {
  Router, Route, hashHistory, browserHistory,
} from 'react-router'
import { connect } from 'react-redux'

import Navigation from './Navigation'
import Home       from './Home'
import AppRouter  from './AppRouter'

const routes = [
  { path: AppRouter.rootPath,
    component: Navigation,
    indexRoute: { component: Home },
    childRoutes: [
      // { path: AppRouter.ourProcessPath,  component: OurProcess },
    ],
  },

]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0) } />
    );
  }
}

App.propTypes = {
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

export default connect(mapStateToProps)(App)

