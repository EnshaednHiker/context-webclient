import * as actions from '~/actions';
import { handle } from 'redux-pack'; 

const initialState = {
    recentAnnotations: [],
    annoString: "",
    dbPediaError: null,
    isAnnoLoading: false,
    annotation: null,
    stringArray: []
};

function splitString (text) {
    return text.split(" ");
}

export default function annotations (state = initialState, action) {
    if (action.type === actions.SET_ANNOTATION_STRING){
        return Object.assign({}, state, {
            annoString: action.annoString
        })
    }
    else if (action.type === actions.ANNOTATE){

        return handle (state, action, {
            start: prevState => ({ ...prevState, isAnnoLoading: true, dbPediaError: null}),
            finish: prevState => ({ ...prevState, isAnnoLoading: false }),
            failure: prevState => ({ ...prevState, dbPediaError: action.payload.body }),
            success: prevState => ({ 
                ...prevState, 
                annotation: action.payload.body
                //recentAnnotations: state.recentAnnotations.pop(action.payload.body)
            })
        });
    }
    else if (action.type === actions.CLEAR_ANNOTATION){
        return Object.assign({}, state,{
            annotation: null
        })
    }
    else if (action.type === actions.MARK_UP_TEXT){
        let stringArray = splitString(action.text);
        
        return Object.assign({}, state, {
            stringArray: stringArray
        })
    }
    else return state;
}