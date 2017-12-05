import * as actions from '~/actions';

const initialState = {
    isTop: true,
    isCollapsed: true,
    recentSearches: [],
    currentSearch:null
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
    else if (action.type === actions.COLLAPSE_MENU){
        return Object.assign({}, state, {
            isCollapsed: true
        })
    }
    else if (action.type === actions.SEARCH){
        return Object.assign({}, state, {
            currentSearch: action.url
        })
    }
    else return state;
};