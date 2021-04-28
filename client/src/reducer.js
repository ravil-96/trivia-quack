import { combineReducers } from 'redux';

import myReducer from './features/myReducer';
import paramsReducer from './features/paramsReducer';



const rootReducer = combineReducers({
      myReducer,
      paramsReducer
})


export default rootReducer;