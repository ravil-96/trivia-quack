import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import App from './App.js';
// import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';

ReactDOM.render(
    <React.StrictMode>
            <Router>
                <App />
            </Router>
    </React.StrictMode>,
    document.getElementById('root')
);