import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Homepage, Lobby, Create, Result } from './pages';
import { GameRoom } from './layout';
const App = () => {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route path="/create">
                    <Create />
                </Route>
                <Route path="/lobby">
                    <Lobby />
                </Route>
                <Route path="/game/:id">
                    <GameRoom />
                </Route>
                <Route path="/result/:id">
                    <Result />
                </Route>
            </Switch>
        </>
    )
}

export default App