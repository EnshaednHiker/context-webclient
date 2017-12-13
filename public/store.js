import {createStore, applyMiddleware } from 'redux';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '~/reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(reduxPackMiddleware)))

export default store;

