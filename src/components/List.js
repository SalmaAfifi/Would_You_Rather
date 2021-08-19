import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionHome from './QuestionHome'

class List extends Component {
    render() {
        return (
        <ul>
            {this.props.qlist.map(q=> <QuestionHome question={q}/>)}
        </ul>
        )
    }
}

export default connect()(List)


