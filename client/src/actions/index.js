import axios from 'axios';
import { useParams } from 'react-router-dom'
// write redux actions here
// e.g.
// export const addUser = newUser => ({ type: 'ADD_USER', payload: newUser })
export const addMessage = ( user, message ) => ({ type: 'ADD_MESSAGE', payload: {user, message} })

export const getAnswers = gameId => {
    return async (dispatch) => {
        try {
            const res = await fetch(`http://localhost:3000/games/${gameId}`)
            const data = await res.json()
            let newQuestions = data.questions.map(question => question)
            console.log(newQuestions)
            dispatch({
                type: 'LOAD_QUESTIONS',
                payload: newQuestions
            })
        } catch (err) {
            dispatch({
                type: 'SET_ERROR',
                payload: err
            })
        }
    }
}
