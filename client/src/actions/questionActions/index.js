import axios from 'axios';

const questionInfo = (info) => ({ type: 'game/moveToTheNextQuestion', payload: info })
const error = (err) => ({ type: 'SET_ERROR', payload: err.message });
export const getQuestion = (id) => {
      return async dispatch => {
          try {
              const {data} = await axios.get(`http://localhost:3000/games/${id}`)
              let question1 = data.questions[0]
              let questionTitle = question1.question
              let opt1 = question1['possible_answers'][0]
              let opt2 = question1['possible_answers'][1]
              let opt3 = question1['possible_answers'][2]
              let opt4 = question1['possible_answers'][3]
              console.log(`what is this? ${question1}`);
              console.log(question);
              console.log(opt1);
              console.log(opt2);
              console.log(opt3);
              console.log(opt4);
              const info = { 
                question: questionTitle, 
                option1: opt1, 
                option2: opt2, 
                option3: opt3, 
                option4: opt4
              }
              console.log(info);
              dispatch(questionInfo(info))
          } catch (err){
            dispatch(error(err))
          }
      } 
}