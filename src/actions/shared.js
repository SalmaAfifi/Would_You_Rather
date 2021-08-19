import {_getUsers, _getQuestions, _saveQuestion } from '../utils/_DATA'
import { receiveUsers, addQToUser } from './users'
import { receiveQuestions, addQuestion } from './questions'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading-bar'




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