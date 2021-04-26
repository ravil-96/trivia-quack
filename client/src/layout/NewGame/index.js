import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const NewGame = () => {
    const history = useHistory();

    // const createRoom = async () => {
    //     try {
    //         let { data } = await axios.post("http://localhost:3000/games");
    //         console.log(data);
    //         history.push(`/game/${data.id}`)     
    //     } catch (err) {
    //         console.warn(err);
    //     }
    // }

    return <a href="/create" className="new-game-button" >New Game</a>
}

export default NewGame;