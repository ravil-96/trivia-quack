function myReducer (state = {players: []}, action) {
    switch (action.type) {
      case 'ADD_PLAYER':
        return ({
            ...state,
            players: action.payload
        })
      case 'LOAD_QUESTIONS':
        return ({
          ...state,
          questions:[...action.payload]})        
      case 'SET_ERROR' :
        return 'error'
      case 'ADD_MESSAGE':
        console.log(action.payload)
        return state
      default:
        return state
    }
  };

export default myReducer