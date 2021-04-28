import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CreateForm } from '../../components';

const Lobby = () => {
  const history = useHistory();

  const amount = useSelector(state => state.paramsReducer.amount);
  const category = useSelector(state => state.paramsReducer.category);
  const difficulty = useSelector(state => state.paramsReducer.difficulty);

  const createRoom = async () => {
      try {
          let { data } = await axios.post(`http://localhost:3000/games?amount=${amount}&category=${category}&difficulty=${difficulty}`);
          console.log(data);
          history.push(`/lobby/${data}`)     
      } catch (err) {
          console.warn(err);
      }
  }

  return (
    <main id="create" className="container">
      <CreateForm createRoom={createRoom}/>
    </main>
  );
};

export default Lobby;