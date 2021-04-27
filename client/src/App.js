import React from 'react'
import { Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
import { Homepage, Lobby, Create, Result } from './pages';
import { GameRoom } from './layout';
=======
import { Homepage, Lobby, Create, Result, Questions } from './pages';

>>>>>>> fe9e4c3baabe2aca7be57fc285d1df9d22a5e026
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
<<<<<<< HEAD
                <Route path="/game/:id">
                    <GameRoom />
=======
                <Route path="/questions">
                    <Questions />
>>>>>>> fe9e4c3baabe2aca7be57fc285d1df9d22a5e026
                </Route>
                <Route path="/result/:id">
                    <Result />
                </Route>
            </Switch>
        </>
    )
}

export default App