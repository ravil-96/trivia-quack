const initialState = [
    { playerId: 1, response: null, ready: false },
    // { playerId: 2, response: null },
    // { playerId: 3, response: null },
    // { playerId: 4, response: null },
    // { playerId: 5, response: null }
]

export const answersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'answers/answerSubmitted':
            return [
                ...state,
                {
                    response: action.payload
                }
            ]
        default:
            return state
    }
}