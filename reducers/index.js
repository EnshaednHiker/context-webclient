import * as actions from '~/actions';
import { handle } from 'redux-pack';  

const initialState = {
    isTop: true,
    isCollapsed: true,
    recentSearches: [],
    annoString: "",
    dbPediaError: null,
    isAnnoLoading: false,
    annotation: null

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
    else if (action.type === actions.SET_ANNOTATION_STRING){
        console.log(action);
        return Object.assign({}, state, {
            annoString: action.annoString
        })
    }
    else if (action.type === actions.ANNOTATE){
        return handle (state, action, {
            start: prevState => ({ ...prevState, isAnnoLoading: true, dbPediaError: null}),
            finish: prevState => ({ ...prevState, isAnnoLoading: false }),
            failure: prevState => ({ ...prevState, dbPediaError: action.payload }),
            success: prevState => ({ ...prevState, annotation: action.payload })
        });
    }
    else return state;
};