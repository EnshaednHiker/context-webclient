import * as actions from '~/actions';
import { handle } from 'redux-pack'; 

const initialState = {
    recentAnnotations: [],
    annoString: "",
    dbPediaError: null,
    isAnnoLoading: false,
    annotation: null
};

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
            failure: prevState => ({ ...prevState, dbPediaError: action.payload.body}),
            success: prevState => ({ 
                ...prevState, 
                annotation: action.payload.body
                //recentAnnotations: state.recentAnnotations.pop(action.payload.body)
            })
        });
    }
    else if (action.type === actions.CLEAR_ANNOTATION){
        return Object.assign({}, state,{
            annotation: null,
            dbPediaError: null,
            annoString: ""
        })
    }
    else return state;
}