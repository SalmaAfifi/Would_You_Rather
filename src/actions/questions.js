export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'




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




