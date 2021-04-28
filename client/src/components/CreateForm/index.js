import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addAmount, addCategory, addDiffculty } from '../../actions/paramsActions';

const CreateForm = ({ createRoom }) => {

  const [ amount , setAmount ] = useState("");
  const [ category , setCategory ] = useState("");
  const [ difficulty , setDifficulty ] = useState("");

  const dispatch = useDispatch();

  const selectAmount = (e) => {
    setAmount(e.target.value);
    dispatch(addAmount(amount));
  }

  const selectCategory = (e) => {
    setCategory(e.target.value)
    dispatch(addCategory(category));
  }

  const selectDifficulty = (e) => {
    setDifficulty(e.target.value)
    dispatch(addDifficulty(difficulty));
  }

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

  const handleSubmit = (e) => {
    e.preventDefault(e);
    console.log(e);
    createRoom();
  }

  return (
    <form className="text-center" onSubmit={handleSubmit}>
      <div id="option-1" className={ showOption1 ? "" : "d-none"}>
          <label for="category">Select a Category for your quiz:</label>
          <select name="category" id="category" >
            <option value="9" onSelect={selectCategory}>General Knowledge</option>
            <option value="21" onSelect={selectCategory}>Sports</option>
            <option value="26" onSelect={selectCategory}>Celebrities</option>
          </select>
          <a className="next-button" onClick={switchOption2}>Next</a>
      </div>
      <div id="option-2" className={ showOption2 ? "" : "d-none"}>
        <label for="amount">Number of questions (3-25): </label>
        <input type="number" id="amount" name="amount" min="3" max="25" />
        <a className="next-button" onClick={switchOption3}>Next</a>
      </div>
      <div id="option-3" className={ showOption3 ? "" : "d-none"}>
        <label for="difficulty">Enter the difficulty:</label>
        <select name="difficulty" id="difficulty">
          <option value="easy" onSelect={selectDifficulty}>Easy</option>
          <option value="medium" onSelect={selectDifficulty}>Difficult</option>
          <option value="hard" onSelect={selectDifficulty}>Hard</option>
        </select>
      </div>
      <input type="submit" value="Submit" className={ showOption3 ? "" : "d-none"}/>
    </form>
  );
}

export default CreateForm;