import React, { Component, Fragment } from 'react'
import SignIn from './SignIn'
import Dashboard from './Dashboard'
import NavBar from './NavBar'
import Unanswered from './Unanswered'
import Answered from './answered'
import AskQ from './AskQ'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import LoadingBar from 'react-redux-loading-bar'
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
      <Fragment>
      {this.props.authedUser == null?
      <SignIn></SignIn>:
      <>
      <LoadingBar/>
      {this.props.loadingBar.default === 0 &&
      <NavBar/> 
      }

      </>
      }
      </Fragment>
      </Router>

    )
  }
}

function mapStateToProps({loadingBar, authedUser}) {
  return {loadingBar, authedUser}
}
export default connect(mapStateToProps)(App)
