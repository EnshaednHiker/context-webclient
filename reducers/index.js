import * as actions from '~/actions';

const initialState = {
    isTop: true,
    isCollapsed: true
};

export const contextReducer = (state = initialState, action) => {
        
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
    else return state;
};