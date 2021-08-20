export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_QUESTION_TOUSER= 'ADD_QUESTION_TOUSER'
export const ADD_ANS = 'ADD_ANS'


export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function addQToUser(Qid, Uid) {
  return{
    type: ADD_QUESTION_TOUSER,
    Qid,
    Uid
  }
  
}

