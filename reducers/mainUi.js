import * as actions from '~/actions';
import { handle } from 'redux-pack'; 

const initialState = {
    isTop: true,
    isCollapsed: true,
    isLogin: true
};

export default function mainUi (state = initialState, action) {
    if (action.type === actions.HAMBURGER_CLICK) {
        return Object.assign({}, state,{
                isCollapsed: action.boolean
            })
    }

    else if (action.type === actions.SCROLL_AT_TOP){
        return Object.assign({}, state,{
            isTop: action.boolean
        })
    }
    else if (action.type === actions.COLLAPSE_MENU){
        return Object.assign({}, state, {
            isCollapsed: true
        })
    }
    else if (action.type === actions.TOGGLE_FORM) {
        return Object.assign({}, state, {
            isLogin: action.boolean
        })
    }
    else return state;
};