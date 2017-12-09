import {createStore, applyMiddleware } from 'redux';
import { middleware as reduxPackMiddleware } from 'redux-pack';

import {contextReducer} from '~/reducers';

export default createStore(contextReducer,applyMiddleware(reduxPackMiddleware));