import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Homepage, Lobby } from './pages';

const App = () => {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route path="/lobby">
                    <Lobby />
                </Route>
            </Switch>
        </>
    )
}

export default App