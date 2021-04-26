import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const JoinGame = () => {
    const history = useHistory();

    // const joinRoom = async () => {
    //     try {
    //         // Add logic for joining a new game room
    //         console.log('Joining game room!');
    //     } catch (err) {
    //         console.warn(err);
    //     }
    // }

    return <a href="/" className="join-game-button">Join Game</a>
}

export default JoinGame;