import myReducer from '../myReducer/';

describe('my reducer', () => {
    it('initialises with no players, answers or open sockets', () => {
        const initReturn = myReducer(undefined, { type: '@@INIT' })
        expect(initReturn).toEqual({players: [], answers: []})
    })

    it('adds a new socket to the store upon new game creation', () => {
        const initState = {players: [], answers: []};
        const fakeSocketObject = {socket: "fakeSocket"};
        const addFakeSocket = myReducer(
                                    initState,
                                    {type: 'ADD_SOCKET', payload: {socket: fakeSocketObject}}
                            )
        Object.keys(addFakeSocket)
        expect(Object.keys(addFakeSocket)).toContain("socket")
    })

    // it('adds a player to the store when a new player joins the room', () => {
    //     const addFakePlayer = myReducer(
    //                             {players: [], answers: []}, { type: '@@INIT' })
    // })

    // test('it returns with updated array when a dogs are loaded', () => {
    //     const fakeLoad = doggoReducer(
    //                         { doggos: [] },
    //                         { type: 'LOAD_DOGGOS', payload: [{ id: 1 }, { id: 2 }]}
    //                     )
    //     expect(fakeLoad).toMatchObject({doggos: [
    //                                 { id: 1 },
    //                                 { id: 2 }
    //                             ]})
    // })


    // test('it returns with updated array when a dog is liked', () => {
    //     const fakeLike = doggoReducer(
    //                         { doggos: [
    //                             { id: 1, liked: false },
    //                             { id: 2, liked: false }
    //                         ] },
    //                         { type: 'TOGGLE_LIKE_DOGGO', payload: 1}
    //                     )
    //     expect(fakeLike).toMatchObject({ doggos: [
    //                             { id: 1, liked: true },
    //                             { id: 2, liked: false }
    //                         ]})
    // })

    // test('it returns with updated array when a dog is deleted', () => {
    //     const fakeDelete = doggoReducer(
    //                         { doggos: [
    //                             { id: 1, liked: false },
    //                             { id: 2, liked: false }
    //                         ] },
    //                         { type: 'DELETE_DOGGO', payload: 1}
    //                     )
    //     expect(fakeDelete).toMatchObject({
    //                         doggos: [
    //                             { id: 2, liked: false }
    //                         ]
    //                     })
    // })
});