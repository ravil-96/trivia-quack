import React, {useEffect, useState} from 'react';
import { playerReady, addAnswer } from '../../actions'
import { useSelector, useDispatch } from 'react-redux'
import io from 'socket.io-client';

const serverEndpoint = "http://localhost:5001"

  
function Options ({options}) {
  const dispatch = useDispatch()
  const socket = useSelector(state => state.myReducer.socket)
  const [selectedOption, setSelectedOption] = useState(null)

  const renderOptions = options.map((option, index) => {
    console.log(index);
    let answerMarker = "";
    switch(index) {
      case 0:
        answerMarker = "A."
        break;
      case 1:
        answerMarker = "B."
        break;
      case 2:
        answerMarker = "C."
        break;
      case 3:
        answerMarker = "D."
        break;
      default:
        break;
    }

    console.log(answerMarker);
    return (
      <button key={index} style={{background: selectedOption === option ? 'green' : null}} onClick={() => handleSelect(option)}>
        <span>{answerMarker}</span> {option}
      </button>
    )
  })

  
  const handleSelect = (option) => {
        setSelectedOption(option)
    }

  const handleSubmit = () => {
        socket.socket.emit("ready", socket.socket.id)
        dispatch(addAnswer(selectedOption))
    }

  useEffect(() => {
    const socket = io(serverEndpoint);
    socket.on("player-ready", (socket) => {
      dispatch(playerReady(socket))
    });
  },[])

  return (
    <div className="options-section">
      {renderOptions}
      <div class="text-center">
        <button className="text-center" type='submit' onClick={handleSubmit}>Submit</button>
      </div>
    </div>  
  )
}

export default Options;