import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Homepage, Lobby, Create, Result, Highscore } from './pages';

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
                <Route path="/results/:id">
                    <Result />
                </Route>
                <Route path="/highscore">
                    <Highscore />
                </Route>
            </Switch>
        </>
    )
}

export default App