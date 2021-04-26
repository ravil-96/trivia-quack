import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const NewGame = () => {
    const history = useHistory();

    const createRoom = () => {
        try {
            let { data } = await axios.post("http.localhost:3000/games");
            console.log(data);
            // history.push(`new room url path`)     
        } catch (err) {
            console.warn(err);
        }
    }

    return <button onClick={createRoom}>New Game</button>
}

export default NewGame;