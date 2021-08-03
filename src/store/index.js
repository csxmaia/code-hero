import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunkMiddleware from 'redux-thunk'

import combinedReducers from './reducers'

const composed = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(combinedReducers, composed);

export default store;