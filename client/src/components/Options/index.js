import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getQuestion} from '../../actions/questionActions';

function Options ({id}) {
  const dispatch = useDispatch();
// 1. The user clicks on a button and it is highlighted
// 2. The user submits an answer
  dispatch(getQuestion(id))
  
  const question = useSelector(state => state.questions.questionTitle)
  const option1 = useSelector(state => state.questions.options[0])
  const option2 = useSelector(state => state.questions.options[1])
  const option3 = useSelector(state => state.questions.options[2])
  const option4 = useSelector(state => state.questions.options[3])


  const [selectedOption, setSelectedOption] = useState();
  
  const handleSelect = e => {
        const input = e.target.value
        setSelectedOption(input)
        console.log(input)
    }

  const handleSubmit = e => {
        e.preventDefault();
        submitAnswer(selectedOption)
    }

  return (
    <>
      <p>{question}</p>
      <button onClick={handleSelect} value={option1}>{option1}</button>
      <button onClick={handleSelect} value={option2}>{option2}</button>
      <button onClick={handleSelect} value={option3}>{option3}</button>
      <button onClick={handleSelect} value={option4}>{option4}</button>
      <button type='submit' onClick={handleSubmit}>Submit</button>
    </>  

  )

}

export default Options;