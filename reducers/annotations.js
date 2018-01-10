import * as actions from '~/actions';
import { handle } from 'redux-pack'; 

const initialState = {
    recentAnnotations: [],
    annoString: "",
    dbPediaError: null,
    isAnnoLoading: false,
    annotation: null,
    articleJson: null,
    isArticleJsonLoading: false,
    articleJsonError: null,
    articleUrl: null,
    articleWord: null
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
            success: prevState => ({...prevState, annotation: action.payload.body
                //recentAnnotations: state.recentAnnotations.pop(action.payload.body)
            })
        });
    }
    else if (action.type===actions.GET_ARTICLE_JSON){
        return handle (state,action,{
            start: prevState => ({ ...prevState, isArticleJsonLoading: true, articleJsonError: null}),
            finish: prevState => ({ ...prevState, isArticleJsonLoading: false }),
            failure: prevState => ({ ...prevState, articleJsonError: action.payload.body}),
            success: prevState => ({...prevState, articleJson: action.payload.body})
        })
    }
    else if (action.type === actions.SET_ARTICLE_URL){
        return Object.assign({}, state, {
            articleUrl: action.url
        })
    }
    // else if (action.type === actions.LOAD_JSON){
    //     return Object.assign({}, state, {  
    //         articleJson: action.json
    //     })
    // }
    else if (action.type === actions.SET_ARTICLE_WORD){
        return Object.assign({}, state, {
            articleWord: action.word
        })
    }
    else if (action.type === actions.DUMP_JSON){
        return Object.assign({}, state, {
            articleJson: null
        })
    }
    else if (action.type === actions.CLEAR_ANNOTATION){
        return Object.assign({}, state,{
            annotation: null,
            dbPediaError: null,
            annoString: "",
            articleUrl: null,
            articleJson: null,
            isArticleJsonLoading: false,
            articleJsonError: null,
            articleWord: null
        })
    }
    else return state;
}