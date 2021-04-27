import axios from 'axios';
import { useParams } from 'react-router-dom'
// write redux actions here
// e.g.
// export const addUser = newUser => ({ type: 'ADD_USER', payload: newUser })






export const loadOption = option => {
    return {
        type: 'answers/answerSubmitted',
        payload: option
    }
}

export const getOptions = id => {
    return async dispatch => {
        try { 
            const { data } = await axios.get(`http://localhost:8080/games/${id}`)
            let options = data.questions.map(q => q['possible_answers'] )
            console.log(options)
        dispatch(loadOption(options))
        } catch {

        }
    }
}

// Helpers
const fetchOptions = async () => {
     const { id } = useParams()
     try {
        if (data.status === 404) { throw Error } 
        console.log(data)
        return data.questions[].possible_answers
     } catch(err) {
         throw new Error(err.message)
     }
}

