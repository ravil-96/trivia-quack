// write redux actions here
// e.g.
// export const addUser = newUser => ({ type: 'ADD_USER', payload: newUser })
export const addMessage = ( user, message ) => ({ type: 'ADD_MESSAGE', payload: {user, message} })