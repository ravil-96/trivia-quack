import axios from 'axios';

const questionInfo = (info) => ({ type: 'game/moveToTheNextQuestion', payload: info })
const error = (err) => ({ type: 'SET_ERROR', payload: err.message });
export const getQuestion = (id) => {
      return async dispatch => {
          try {
              const {data} = await axios.get(`http://localhost:8080/games/${id}`)
              let question1 = data.questions[0]
              let questionTitle = question1.question
              let option1 = question1['possible_answers'][0]
              let option2 = question1['possible_answers'][1]
              let option3 = question1['possible_answers'][2]
              let option4 = question1['possible_answers'][3]
              const info = { question: questionTitle, option1: option1, option2: option2, option3: option3, option4: option4}
              dispatch(questionInfo(info))

          } catch (err){
            dispatch(error(err))
          }
      } 
}