import { RECEIVE_USERS, ADD_QUESTION_TOUSER } from '../actions/users'


export default function users (state = {}, action) {
  const {Uid, Qid} = action
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case ADD_QUESTION_TOUSER:
      return{
        ...state,
        [Uid]: {
          ...state[Uid],
          questions: state[Uid].questions.concat([Uid])
        }

      }
    default :
      return state
  }
}