import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { GameRoom } from './layout';
import { Homepage, Lobby, Create, Result, Questions } from './pages';

const App = () => {
    return (
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
<<<<<<< HEAD
                <Route path="/game/:id">
                    <GameRoom />
                </Route>
                <Route path="/questions">
                    <Questions />
                </Route>
                <Route path="/result/:id">
=======
                <Route path="/results/:id">
>>>>>>> 12c526f78bc618bc4959321e339c02e3e0b3c3c0
                    <Result />
                </Route>
            </Switch>
    )
}

export default App