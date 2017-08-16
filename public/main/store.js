import {createStore} from 'redux';

import {contextReducer} from '~/reducers';

export default createStore(contextReducer);