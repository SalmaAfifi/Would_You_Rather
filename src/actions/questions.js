export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_ANS = 'ADD_ANS'



export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS, 
    questions
  }
}

export function addQuestion(question) {
  const id = question.id
  const questionObj = {[id]: question}
  return{
    type: ADD_QUESTION,
    questionObj
  }
  
}

export function addAnswer({ authedUser, qid, answer }) {
  return{
    type: ADD_ANS,
    authedUser,
    qid,
    answer
  }
  
}



