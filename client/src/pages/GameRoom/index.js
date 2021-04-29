import React, { useState, useEffect } from'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { PlayerCard, Options } from '../../components'
import { getAnswers, allNotReady } from '../../actions'
import { API_ADDRESS } from '../../actions/globalVars';

import { getIcon } from '../../actions/getIcon';


const GameRoom = () => {
  const { id } = useParams()
  const history = useHistory()
  const dispatch = useDispatch()

  const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

  const currentPlayers = useSelector(state => state.myReducer.players)
  const socket = useSelector(state => state.myReducer.socket)
  const questions = useSelector(state => state.myReducer.questions)
  const answers = useSelector(state => state.myReducer.answers)

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [theme, setTheme] = useState("theme-planet-1");
  const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        dispatch(getAnswers(id))
    }, []);

    useEffect(() => {
      if (currentPlayers.length > 0 && currentPlayers.every(player => player.ready === true)) {
        if (currentQuestion < questions.length-1) {
          dispatch(allNotReady())
          setCurrentQuestion(q => q + 1)
          setDisabled(false);
        } else {
          const timeout =  (currentPlayers.findIndex(p => p.player == socket.socket.id) + 1) * 1000
          setTimeout(() => axios({
            method: 'post',
            url: `${API_ADDRESS}/games/${id}/players/${socket.socket.id}/answers`,
            data: answers
          }), timeout);
          setTimeout(() => history.push(`/results/${id}`), (currentPlayers.length * 1000) + 1000)
        }
      }
    },[currentPlayers])

    useEffect(() => {
      let question = currentQuestion;
      if (question % 3 === 2) {
        setTheme("theme-planet-3");
      } else if (question % 3 === 1) {
        setTheme("theme-planet-2");
      } else {
        setTheme("theme-planet-1");
      }
    },[currentQuestion])
  
    const returnPlayer = currentPlayers.map((player, index) => {
        return <PlayerCard key={index} player={player.player} me={player.player === socket.socket.id} icon={getIcon()} ready={player.ready} />
    });
  

    return (
      <section style={{ color: "white" }} id="game-room" className={theme}>
        <div class="container">
          <div id="App">Room: {id}</div>
          <div className="planets">
            
          </div>
          { questions ?
            <>
              <div className="text-center">
                <h3>QUESTION {currentQuestion+1}</h3>
                <h1>{renderHTML(questions[currentQuestion].question)}</h1>
              </div>
              <Options options={questions[currentQuestion].possible_answers} disabled={disabled} setDisabled={setDisabled}/>
              {returnPlayer}
            </>
          :
            null }
        </div>
      </section>
    );

}

export default GameRoom;