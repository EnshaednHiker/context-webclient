import * as actions from '~/actions';
import { handle } from 'redux-pack'; 
//the below should log out to "http://live.dbpedia.org/ontology/abstract"
let abstract = process.env.DBPEDIA_ABSTRACT

const initialState = {
    recentAnnotations: [],
    annoString: "",
    dbPediaError: null,
    isAnnoLoading: false,
    annotation: null,
    isArticleJsonLoading: false,
    articleJsonError: null,
    articleUrl: "nullUrl",
    articleWord: null,
    abstract: "Sorry, no abstract found for this entry.",
    externalLinks: ["Sorry, no external links found for this entry."]
};

function getLinks (json,url) {
    
    let rightObject = json[url];
    let arrayOrRightObjectKeys = Object.keys(rightObject);
    let externalLinksKey = process.env.DBPEDIA_EXTERNAL_LINKS;
    if(arrayOrRightObjectKeys.includes(externalLinksKey)){
        let arrayOfLinkObjects = rightObject[externalLinksKey];
        let arrayOfLinkValues = arrayOfLinkObjects.map((link)=>{
            return link.value
        });
        return arrayOfLinkValues;
    }
    else {
        return ["Sorry, no external links found for this entry."]
    }
}

function getAbstract(json,url){
    
    let rightObject = json[url];
    let arrayOrRightObjectKeys = Object.keys(rightObject);
    let abstractKey = process.env.DBPEDIA_ABSTRACT;
    if(arrayOrRightObjectKeys.includes(abstractKey)){
        let arrayOfAbstracts = rightObject[abstractKey];
        let abstractFilteredArray = arrayOfAbstracts.filter(abstract => abstract["lang"]==="en")
        let abstractObject = abstractFilteredArray[0];
        let abstract = abstractObject.value;
    
        return abstract;
    }
    else {
        return "Sorry, no abstract found for this entry."
    }
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
            success: prevState => ({...prevState, abstract:getAbstract(action.payload.body,state.articleUrl), externalLinks: getLinks(action.payload.body,state.articleUrl) })
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
            annoString: "",
            dbPediaError: null,
            isAnnoLoading: false,
            annotation: null,
            isArticleJsonLoading: false,
            articleJsonError: null,
            articleUrl: "nullUrl",
            articleWord: null,
            abstract: "Sorry, no abstract found for this entry.",
            externalLinks: ["Sorry, no external links found for this entry."]
        })
    }
    else return state;
}