import icon1 from '../../images/player-1.png';
import icon2 from '../../images/player-2.png';
import icon3 from '../../images/player-3.png';
import icon4 from '../../images/player-4.png';
import icon5 from '../../images/player-5.png';
import icon6 from '../../images/player-6.png';
import icon7 from '../../images/player-7.png';
import icon8 from '../../images/player-8.png';
import icon9 from '../../images/player-9.png';
import icon10 from '../../images/player-10.png';

import React, { useState, useEffect } from'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client';
import axios from 'axios';

import { PlayerCard, Options } from '../../components'
import { getAnswers } from '../../actions'


import { playerReady } from '../../actions'


const GameRoom = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const currentPlayers = useSelector(state => state.myReducer.players)
  const socket = useSelector(state => state.myReducer.socket)
  const questions = useSelector(state => state.myReducer.questions)
  
  
    useEffect(() => {
        dispatch(getAnswers(id))


    }, []);

    const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10];

    const returnIcon = () => {
      let icon = icons[Math.floor(Math.random() * icons.length)];
      return icon;
    }
  
    const readyMarker = false;
  
    const returnPlayer = currentPlayers.map(player => {
        return (
        <>
        <div>{JSON.stringify(player.ready)}</div>
        <PlayerCard player={player.player} me={player.player === socket.socket.id} icon={returnIcon()} ready={player.ready} />
        </>
        )
    });
  

    return (
      <section style={{ color: "white" }} id="game-room">
        <div id="App">Room: {id}</div>
        { questions ? <>
        <Options options={questions[0].possible_answers}/>
        {returnPlayer}</> : null }
      </section>
    );

}

export default GameRoom;