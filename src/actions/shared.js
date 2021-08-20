import {_getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'
import { receiveUsers, addQToUser, } from './users'
import { receiveQuestions, addQuestion } from './questions'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const ADD_ANS = 'ADD_ANS'


export function addAnswer({ authedUser, qid, answer }) {
  return{
    type: ADD_ANS,
    authedUser,
    qid,
    answer
  }
  
}

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return Promise.all([
      _getUsers(), _getQuestions()
    ])
    .then(( values ) => {
        dispatch(receiveUsers(values[0]))
        dispatch(receiveQuestions(values[1]))
        dispatch(hideLoading())
      })
    
  }
}

export function addNewQuestion (question){
  return (dispatch)=>{
    dispatch(showLoading())
    return _saveQuestion(question)
    .then(formattedQuestion =>{
      dispatch(addQuestion(formattedQuestion))
      dispatch(addQToUser(formattedQuestion.id, formattedQuestion.author))
      dispatch(hideLoading())
    })

  }

}

export function addNewAnser (answer){
  return (dispatch)=>{
    dispatch(showLoading())
    return _saveQuestionAnswer(answer)
    .then(() =>{
      dispatch(addAnswer(answer))
      dispatch(hideLoading())
    })

  }

}