const initialState = [
    { playerId: 1, responses: [], error: false },
    // { playerId: 2, response: null },
    // { playerId: 3, response: null },
    // { playerId: 4, response: null },
    // { playerId: 5, response: null }
]

export const answersReducer = (state = initialState, action) => {
    switch (action.type) {
        // case 'answers/answerSubmitted':
        //     return [
        //         ...state,
        //         {
        //             response: action.payload
        //         }
        //     ]
        case 'player1/answerSubmit':
            return [ 
                ...state,
                {...state, responses: action.payload, error: false }
            ]
        case 'SET_ERROR':
            return {...state, error: action.payload}
        default:
            return state
    }
}