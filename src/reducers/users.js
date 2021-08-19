import { RECEIVE_USERS, ADD_QUESTION_TOUSER, ADD_ANS_TOUSER } from '../actions/users'


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
    case ADD_ANS_TOUSER:
      return{
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer
          }
        }
      }  
    default :
      return state
  }
}
