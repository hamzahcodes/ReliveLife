import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

import { Provider } from 'react-redux'; //It Provides all states from the redux store 
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';


// global store for all stateful components
const store = createStore(reducers, {}, applyMiddleware(thunk))

ReactDOM.render(
    // same like context api in react
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById("root"));