import React, {useState} from 'react';


function Options () {

// 1. The user clicks on a button and it is highlighted
// 2. The user submits an answer

  const [selectedOption, setSelectedOption] = useState();
  
  const handleSelect = e => {
        const input = e.target.value
        setSelectedOption(input)
        console.log(input)
        return input
    }

  const handleSubmit = e => {
        e.preventDefault();
        submitAnswer(input)
    }

  

  return (
    <>
      <button onClick={handleSelect} value='option1'>Option1</button>
      <button onClick={handleSelect} value='option2'>Option2</button>
      <button onClick={handleSelect} value='option3'>Option3</button>
      <button onClick={handleSelect} value='option4'>Option4</button>
      <button type='submit'>Submit</button>
    </>  

  )

}

export default Options;