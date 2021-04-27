function myReducer (state = [], action) {
    switch (action.type) {
      case 'LOAD_QUESTIONS':
        return ([
            ...action.payload             
        ])
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