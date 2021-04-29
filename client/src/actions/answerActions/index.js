import axios from 'axios';
import { API_Local, API_Production } from '../globalVars'

const answerInfo = (info) => ({ type: 'player1/answerSubmitted', payload: info })
const error = (err) => ({ type: 'SET_ERROR', payload: err.message });
export const getPlayerAnswer = (id, playername, playerInput) => {
      return async dispatch => {
          try {
              const {data} = await axios.post(`${API_Production}/games/${id}/player/${playername}/answers`)
              // Define payload ??
              dispatch(answerInfo(/* Payload in here */))
          } catch (err){
            dispatch(error(err))
          }
      } 
}