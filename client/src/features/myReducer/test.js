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

    it('updates an individual player\'s readiness', () => {
        // Test PLAYER_READY
    })

    it('resets player readiness and when all players are ready', () => {
        // Test ALL_NOT_READY
    })


    it('loads questions for the players and puts them in the store', () => {
        // Think I need to make this one async await and test the fetch request
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