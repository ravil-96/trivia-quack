const initialState = [
    { 
        questionId: 1, 
        questionTitle: 'Who won Oscar for best actor in leading role in 1994',
        option1: 'Tom Hanks', 
        option2: 'Daniel Day-Lewis',
        option3: 'Anthony Hopkins', 
        option4: 'Liam Neeson',
        error: null,
    }
]

function nextQuestionId(questions) {
    const maxId = questions.reduce((maxId, question) => Math.max(question.id, maxId), 0)
    return maxId + 1
}

export default function questionsReducer(state=initialState, action) {
    switch(action.type) {
        case 'game/moveToTheNextQuestion':
            return [ ...state, action.payload ]
        case 'SET_ERROR':
            return [...state, {...state, error: action.payload} ]
        default:
            return state
    }
}