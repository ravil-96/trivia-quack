// write redux actions here
// e.g.
// export const addUser = newUser => ({ type: 'ADD_USER', payload: newUser })

export const submitAnswer = option => {
    return {
        type: 'answers/answerSubmitted',
        payload: option
    }
}