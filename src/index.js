import './polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom'
import reducers from './reducers'

import './index.css';
import App from './App';

const store = createStore(
    reducers, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),  // {} vardı
    applyMiddleware(ReduxThunk)
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
