import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {Options} from '../../components'
// Import actions & components 


function questionPage () {
  const dispatch = useDispatch;
  const questionNumber = useSelector(state => state.questionId)
  const questionTitle = useSelector(state => state.questionTitle)
  const option1 = useSelector(state => state.option1)
  const option2 = useSelector(state => state.option2)
  const option3 = useSelector(state => state.option3)
  const option4 = useSelector(state => state.option4)

  dispatch({type:'answers/answerSelected', payload: option})
  // Add action

  return (
    <>
      <h2> 
        Question {questionNumber}
      </h2>
      <h1> {questionTitle} </h1>
      <Options/> 
    </>
  )
}

export default Options;




