import axios from 'axios';
import { API_Local, API_Production } from '../globalVars'

const questionInfo = (info) => ({ type: 'game/moveToTheNextQuestion', payload: info })
const error = (err) => ({ type: 'SET_ERROR', payload: err.message });
export const getQuestion = (id) => {
      return async dispatch => {
          try {
              const {data} = await axios.get(`${API_Local}/games/${id}`)
              let question1 = data.questions[0]
              let questionTitle = question1.question
              let opt1 = question1['possible_answers'][0]
              let opt2 = question1['possible_answers'][1]
              let opt3 = question1['possible_answers'][2]
              let opt4 = question1['possible_answers'][3]
              let possAnswers = [opt1, opt2, opt3, opt4]
              const info = { questionTitle, possAnswers }
              console.log(info);
              dispatch(questionInfo(info))
          } catch (err){
            dispatch(error(err))
          }
      } 
}