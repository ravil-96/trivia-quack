function paramsReducer (state = {amount: null, category: null, difficulty: null}, action) {
    switch (action.type) {
        case 'ADD_AMOUNT':
            return ({
                ...state,
                amount: action.payload
            })
        case 'ADD_CATEGORY':
            return ({
                ...state,
                category: action.payload
            })
        case 'ADD_DIFFICULTY':
            return ({
                ...state,
                difficulty: action.payload
            })          
        case 'SET_ERROR' :
            return 'error'
        default:
            return state
    }
  };

export default paramsReducer;