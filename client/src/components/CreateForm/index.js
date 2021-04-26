import React, { useState } from 'react';

const CreateForm = () => {

  const [showOption1, setShowOption1] = useState(true);
  const [showOption2, setShowOption2] = useState(false);
  const [showOption3, setShowOption3] = useState(false);

  const switchOption2 = () => {
    setShowOption1(false);
    setShowOption2(true);
  }

  const switchOption3 = () => {
    setShowOption2(false);
    setShowOption3(true);
  }

  return (
    <form>
      { showOption1 ?
        <div id="option-1">
            <label for="category">Select a Category for your quiz:</label>
            <select name="category" id="category">
              <option value="9">General Knowledge</option>
              <option value="21">Sports</option>
              <option value="26">Celebrities</option>
            </select>
            <a className="next-button" onClick={switchOption2}>Next</a>
        </div>
          :
        <></>
      }
      { showOption2 ?
        <div id="option-2">
          <label for="amount">Number of questions (3-25): </label>
          <input type="number" id="amount" name="amount" min="3" max="25"></input>
          <a className="next-button" onClick={switchOption3}>Next</a>
        </div>
          :
        <></>
      }
      { showOption3 ?
        <div id="option-3">
          <label for="difficulty">Enter the difficulty:</label>
          <select name="difficulty" id="difficulty">
            <option value="easy">Easy</option>
            <option value="medium">Difficult</option>
            <option value="hard">Hard</option>
          </select>
          <button>Submit</button>
        </div>
          :
        <></>
      }
    </form>
  );
}

export default CreateForm;