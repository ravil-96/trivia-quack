import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const NewGame = () => {
    const history = useHistory();

    const createRoom = async () => {
        try {
            let { data } = await axios.post("http.localhost:3000/games");
            console.log(data);
            history.push(`/game/${data.data.insertedId}`)     
        } catch (err) {
            console.warn(err);
        }
    }

    return <button onClick={createRoom} style={{backgroundColor: "transparent", borderStyle: "none", color: "white"}}>New Game</button>
}

export default NewGame;