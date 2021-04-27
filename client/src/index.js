import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.js';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';

ReactDOM.render(
    <React.StrictMode>
<<<<<<< HEAD
            <Router>
                <Provider store={store}>
                    <App />
                </Provider>                    
            </Router>
=======
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
>>>>>>> fe9e4c3baabe2aca7be57fc285d1df9d22a5e026
    </React.StrictMode>,
    document.getElementById('root')
);