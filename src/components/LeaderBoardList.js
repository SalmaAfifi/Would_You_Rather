import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderBoard from './LeaderBoard'

class LeaderBoardList extends Component {
    render() {
        const userSorted = Object.values(this.props.users).map(u=>{
            console.log(u)
            return {
                name: u.name,
                img: u.avatarURL,
                q: u.questions.length,
                ans: Object.keys(u.answers).length,
                score: Object.keys(u.answers).length +  u.questions.length
            }
        })

        userSorted.sort((a,b)=>b.score-a.score)
        return (
        <ul>
            {userSorted.map(user=> <LeaderBoard name={user.name} img={user.img} numq={user.q} ans={user.ans} score={user.score}/>)}
        </ul>
        )
    }
}
function mapStateToProps({users}) {
    return{
        users
    }
}
export default connect(mapStateToProps)(LeaderBoardList)
