const initialState = [
    { questionId: 1, questionTitle: ['Who won Oscar for best actor in leading role in 1994'],
      option1: ['Tom Hanks'], option2: ['Daniel Day-Lewis'], 
      option3: ['Anthony Hopkins'], option4: ['Liam Neeson'],
    },
    {
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
            return [
                ...state,
                {
                    id: nextQuestionId(state),
                    questionTitle: action.payload.question,
                    option1: action.payload.option1,
                    option2: action.payload.option2,
                    option3: action.payload.option3,
                    option4: action.payload.option4
                }
            ]
        case 'SET_ERROR':
            return [...state, {error: action.payload}
            ]
        default:
            return state
    }
}