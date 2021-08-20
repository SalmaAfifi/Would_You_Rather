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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LeaderBoardList from './LeaderBoardList'
import PageNotFound from './PageNotFound'


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {
    if (this.props.authedUser == null) {
      return (<SignIn></SignIn>)
    } else{
    return (
      <Router>
      <Fragment>
      <LoadingBar/>
      {this.props.loadingBar.default === 0 &&
      <NavBar/> 
      }
      </Fragment>

      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/add" component={AskQ}/>
        <Route exact path="/leaderboard" component={LeaderBoardList}/>
        <Route exact path="/questions/:id" component={Unanswered}/>
        <Route exact path='*' component={PageNotFound}/>
      </Switch>
      </Router>

    )
  }
}
}

function mapStateToProps({loadingBar, authedUser}) {
  return {loadingBar, authedUser}
}
export default connect(mapStateToProps)(App)
