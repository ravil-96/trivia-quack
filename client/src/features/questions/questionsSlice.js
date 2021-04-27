const initialState = { 
        // questionId: 1, 
        questionTitle: 'Who won Oscar for best actor in leading role in 1994',
        options: ['Tom Hanks', 'Daniel Day-Lewis','Anthony Hopkins', 'Liam Neeson'],
        error: null,
}

// function nextQuestionId(questions) {
//     const maxId = questions.reduce((maxId, question) => Math.max(question.id, maxId), 0)
//     return maxId + 1
// }

export default function questionsReducer(state=initialState, action) {
    switch(action.type) {
        case 'game/moveToTheNextQuestion':
            return { 
                ...state, 
                questionTitle: action.payload.questionTitle,
                options: action.payload.possAnswers 
            }
        case 'SET_ERROR':
            return {...state, error: action.payload}
        default:
            return state
    }
}