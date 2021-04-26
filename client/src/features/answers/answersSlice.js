const initialState = [
    { playerId: 1, response: 'option2' },
    { playerId: 2, response: 'option1' },
    { playerId: 3, response: 'option3' },
    { playerId: 4, response: 'option4' },
    { playerId: 5, response: 'option1' }
]

export default function answersReducer(state = initialState, action){
    switch (action.type) {
        case 'answers/answerSelected':
            return [
                ...state, 
                {
                    response: action.payload
                }
            ]
    }
}