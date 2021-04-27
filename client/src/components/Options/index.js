import React, {useEffect, useState} from 'react';
import { playerReady } from '../../actions'
import { useSelector, useDispatch } from 'react-redux'
import io from 'socket.io-client';

const serverEndpoint = "http://localhost:3000"

  
function Options ({options}) {
  const dispatch = useDispatch()
  const socket = useSelector(state => state.myReducer.socket)
  const [selectedOption, setSelectedOption] = useState(null)

  const renderOptions = options.map(option => {
    return (
      <button style={{background: selectedOption === option ? 'green' : null}} onClick={() => handleSelect(option)}>{option}</button>
    )
  })

  
  const handleSelect = (option) => {
        setSelectedOption(option)
    }

  const handleSubmit = () => {
        socket.socket.emit("ready", socket.socket.id)
    }

  useEffect(() => {
    const socket = io(serverEndpoint);
    socket.on("player-ready", (socket) => {
      dispatch(playerReady(socket))
    });
  },[])

  return (
    <>
      <p>Hello</p>
      {renderOptions}
      <button type='submit' onClick={handleSubmit}>Submit</button>
    </>  
  )
}

export default Options;