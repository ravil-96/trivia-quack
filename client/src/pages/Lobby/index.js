import React, { useEffect, useState } from 'react';
import { PlayerCard } from '../../components';
import io from 'socket.io-client';
import axios from 'axios'
import { API_ADDRESS, SOCKET_ADDRESS } from '../../actions/globalVars';

import { addPlayer, playerReady, addSocket, allNotReady } from '../../actions'

import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'

import { getIcon } from '../../actions/getIcon'

const Lobby = () => {
  const [gameInfo, setGameInfo] = useState(null)

  const { id } = useParams()
  const history = useHistory()
  const dispatch = useDispatch()
  const serverEndpoint = `${SOCKET_ADDRESS}`

  const currentPlayers = useSelector(state => state.myReducer.players)
  const socket = useSelector(state => state.myReducer.socket)



  useEffect(() => {
    const socket = io(serverEndpoint);
    dispatch(addSocket({ socket }))
    // setSocket({ socket });
    socket.emit("create", id);

    socket.on("players-in-room", (list) => {
      console.log(list)
      dispatch(addPlayer(list))
    });

    socket.on("player-ready", (socket) => {
      dispatch(playerReady(socket))
    });

    async function fetchInfo(){
    const { data } = await axios.get(`${API_ADDRESS}/games/${id}/simple`)
    setGameInfo(data)
    }
    fetchInfo()
  },[])

  useEffect(() => {
    if (currentPlayers.length > 0 && currentPlayers.every(player => player.ready === true)) {
      const timeout = (currentPlayers.findIndex(p => p.player == socket.socket.id) + 1) * 3000
      setTimeout(() => axios.post(`${API_ADDRESS}/games/${id}/players/${socket.socket.id}`, timeout))
      history.push(`/game/${id}`)
      dispatch(allNotReady())
    }
  },[currentPlayers])

  function handleReady(){
    socket.socket.emit("ready", socket.socket.id)
  }

  const returnPlayer = currentPlayers.map(player => {
      return <PlayerCard player={player.player} me={player.player === socket.socket.id} icon={getIcon()} ready={player.ready} />
  });

  return (
    <main id="lobby" className="container">
      {gameInfo && (
        <section style={{color: 'white'}}>
          <p>Category: {gameInfo.category}</p>
          {/* <p>Difficulty: {gameInfo.difficulty}</p> */}
          <p>Type: {gameInfo.type}</p>
          <p>Length: {gameInfo.length}</p>
        </section>
      )}

      <div className="row">
        <div className="col-md-6 text-center align-self-center">
          <button onClick={handleReady} className="ready-button">
            Ready Up
          </button>
        </div>
        <div className="col-md-6">
          <h3>Player List:</h3>
          {returnPlayer}
        </div>
      </div>
    </main>
  );
};

export default Lobby;