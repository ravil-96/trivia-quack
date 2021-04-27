import React, { useState, useEffect } from'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client';
import axios from 'axios';

import { getAnswers } from '../../actions'

/* ***************************************
// Import redux and components below ...

import { } from '../../components;
import { } from '../../features;


*************************************** */

import { Chat, Options } from '../../components'
import { addMessage } from '../../actions'

const serverEndpoint = "http://localhost:3000"

const GameRoom = () => {
    const { id } = useParams()
    const [socket, setSocket] = useState(null);
  
    const [error, setError] = useState()
    const [loading, setLoading] = useState()
    const [room, setRoom] = useState()
  
    const [count, setCount] = useState(0)
  
    const questions = useSelector(state => state.myReducer)
    const dispatch = useDispatch()
  
  
    useEffect(() => {
        dispatch(getAnswers(id))

        const socket = io(serverEndpoint);
        setSocket({ socket });
        socket.emit("create", id);
  
        socket.on("count", (count) => {
          setCount(count)
        })
  
        socket.on("admin-message", (msg) => {
          dispatch(addMessage("admin", msg));
        });
  
        socket.on("incoming-message", ({ username, message }) => {
          dispatch(addMessage(username, message));
        });
        return () => {
          socket.disconnect();
        };
    }, []);
  
  
    const sendMessage = (event, { message, setMessage }) => {
      event.preventDefault()
      socket.socket.emit('new-message', {username: socket.socket.id, message: message})
      setMessage('')
    }
  

    return (
        <section style={{color: 'white'}} id="game-room">
             <div id="App">Room: {id}</div>
             <span>users: {count}</span>
             <span>{JSON.stringify(questions)}</span>
            {/* { loading ? 
                (<div>loading...</div>) : 
                error ? (<div>{JSON.stringify(error)}</div>
      ) : (
      <Chat messages={messages} sendMessage={sendMessage} />
      )} */}
          {/* <Options id={id}/> */}
        </section>
    )

}

export default GameRoom;