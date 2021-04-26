import React, {useState} from 'react';


function Options () {

// 1. The user clicks on a button and it is highlighted
// 2. The user submits an answer

    const [selectedOption, setSelectedOption] = useState;

    const handleSelect = e => {
        input = e.currentTarget
        setSelectedOption = input
    }

    const handleSubmit = e => {
        
        
    }

  return (
    <>
      <button onClick={handleSelect} value='selected'>Option1</button>
      <button onClick={handleSelect} >Option2</button>
      <button onClick={handleSelect}>Option3</button>
      <button onClick={handleSelect}>Option4</button>
    </>  

  )

}

export default Options;