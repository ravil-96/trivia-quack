import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getQuestion} from '../../actions/questionActions';

function Options ({id}) {
  const dispatch = useDispatch();
// 1. The user clicks on a button and it is highlighted
// 2. The user submits an answer
  dispatch(getQuestion(id))
  
  const question = useSelector(state => state.questions.questionTitle)
  const options = useSelector(state => state.questions.options)

  const renderOptions = options.map(option => {
    return (
      <button onClick={handleSelect} value={option}>{option}</button>
    )
  })


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
      {renderOptions}
      <button type='submit' onClick={handleSubmit}>Submit</button>
    </>  

  )

}

export default Options;