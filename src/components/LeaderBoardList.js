import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderBoard from './LeaderBoard'

class LeaderBoardList extends Component {
    render() {
        return (
        <ul>
            {this.props.userSorted.map(user=> <LeaderBoard name={user.name} img={user.img} numq={user.q} ans={user.ans} score={user.score}/>)}
        </ul>
        )
    }
}


function mapStateToProps({users}) {
    const userSorted = Object.values(users).map(u=>{
        return {
            name: u.name,
            img: u.avatarURL,
            q: u.questions.length,
            ans: Object.keys(u.answers).length,
            score: Object.keys(u.answers).length +  u.questions.length
        }
    })

    return{
        userSorted: userSorted.sort((a,b)=>b.score-a.score)
    }
}
export default connect(mapStateToProps)(LeaderBoardList)
