import * as actions from '~/actions';
import { handle } from 'redux-pack'; 

const initialState = {
    isTop: true,
    isCollapsed: true,
    isLoginForm: true
};

export default function mainUi (state = initialState, action) {
    if (action.type === actions.SCROLL_AT_TOP){
        return Object.assign({}, state,{
            isTop: action.boolean
        })
    }
    else if (action.type === actions.TOGGLE_FORM) {
        return Object.assign({}, state, {
            isLoginForm: action.boolean
        })
    }
    else return state;
};