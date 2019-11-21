import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReactDOM from 'react-dom'
import App from './App';

import './App.css';

import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(<Provider store={store}><App className='app-container'/></Provider>, document.getElementById('root'));
serviceWorker.unregister();
