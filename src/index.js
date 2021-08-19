import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import {BrowserRouter as Router} from 'react-router-dom'
import LeaderBoard from './components/LeaderBoard'


const store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)

