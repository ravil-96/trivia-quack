import { combineReducers } from 'redux'

import answersReducer from './features/answers/answersSlice'
import playersReducer from './features/players/playersSlice'
import questionsReducer from './features/questions/questionsSlice'


const rootReducer = combineReducers({
      answers: answersReducer,
      players: playersReducer,
      questions: questionsReducer,
})


export default rootReducer;