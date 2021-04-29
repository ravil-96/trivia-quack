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
        expect(Object.keys(addFakeSocket)).toContain("socket")
    })

    it('adds a player to the store when a new player joins the room', () => {
        const fakePlayer = 'hSJes_8fbvdJGSVCAANH';
        const addFakePlayer = myReducer(
                                {players: []}, 
                                { type: 'ADD_PLAYER', payload: [fakePlayer] })
        expect(addFakePlayer).toMatchObject({players: [{player: fakePlayer, ready: false}]})
    })

    it('adds a player\'s answer on submission', () => {
        const fakeAnswer = "Quebec City";
        const addFakeAnswer = myReducer(
                                    {answers: []},
                                    {type: 'ADD_ANSWER', payload: fakeAnswer}
                            )
        expect(addFakeAnswer).toMatchObject({answers: [fakeAnswer]})
    })

    it('returns an error when SET_ERROR is called', () => {
        const fakeError = myReducer(
                                    undefined,
                                    {type: 'SET_ERROR'}
                            )
        expect(fakeError).toEqual('error')
    })

});