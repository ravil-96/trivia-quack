import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Homepage, Lobby, Create, Result } from './pages';

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
            </Switch>
        </>
    )
}

export default App