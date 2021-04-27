const initialState = [
    {playerId: 1, name: "Ravil", totalScore: 0},
    {playerId: 2, name: "Adil", totalScore: 0},
    {playerId: 3, name: "Elwin", totalScore: 0},
    {playerId: 4, name: "Aaron", totalScore: 0},
    {playerId: 5, name: "Chris", totalScore: 0},
]

function nextPlayerId(players) {
    const maxId = players.reduce((maxId, player) => Math.max(player.id, maxId), 0)
    return maxId + 1
}

export default function playersReducer(state = initialState, action) {
    switch (action.type) {
        case 'players/playerAdded': {
            return [
                ...state,
                {
                    id: nextPlayerId(state),
                    name: action.payload,
                    totalScore: 0
                }
            ]
        } 
        default:
            return state
    }
}

