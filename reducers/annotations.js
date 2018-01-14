import * as actions from '~/actions';
import { handle } from 'redux-pack';
import splitAt from 'split-at';


const initialState = {
    recentAnnotations:[{annotation:["foo","bar"]}],
    annoString: "",
    dbPediaError: null,
    
    annotation: null,
    
    articleJsonError: null,
    articleUrl: "nullUrl",
    articleWord: null,
    abstract: "Sorry, no abstract found for this entry.",
    externalLinks: ["Sorry, no external links found for this entry."],
    annotatedText: null,
    serverError: null,
    //state for loading screens
    postingAnnotation: false,
    areAnnotationsLoading:false,
    isAnnoLoading: false,
    isArticleJsonLoading: false
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

function convertText(annotation){
    let separator = "45098quarksdfglijhg34bitcoin5987xvckjhg3madness562867"            
    let newString = annotation['@text'];
    console.log("annotation: ", annotation);
    //remove duplicate named entities flagged by dbPedia
   
    let arrayResources = annotation.Resources.filter((resource, index, self)=>{
        return index === self.findIndex((r) => {
            return r['@surfaceForm'] === resource['@surfaceForm']
        })
    });
    
    
    //build indices for splitAt function
    let indicesSplitsEndArray = arrayResources.map((resource)=>{
        return resource['@surfaceForm'].length+parseInt(resource['@offset']) - 1
    });
    let indicesSplitsStartArray = arrayResources.map((resource)=>{
        return parseInt(resource['@offset']) - 1
    });
    let indicesArray = indicesSplitsStartArray.concat(indicesSplitsEndArray);
    indicesArray.sort((a, b) => {
        return a - b;
      });
    
    //cut up string with the multiple splits
    let splitArray = splitAt(newString,indicesArray);
    
    //use a .map to return an array where elements that exactly match to '@surfaceForm' get changed into the proper object
    
    let surfaceForm = '@surfaceForm';
    let uri = '@URI';

    let convertedSplitArray = splitArray.map((splitString)=>{
        let matchedResource = arrayResources.find((element)=>{
            return element[surfaceForm]===splitString 
        })
        if (matchedResource){
            return JSON.stringify({uri:matchedResource[uri],word:matchedResource[surfaceForm]})
        }
        else {
            return splitString
        }
    });
    console.log("convertedSplitArray in reducer: ",convertedSplitArray);
    return convertedSplitArray
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
            success: prevState => ({...prevState, annotation: action.payload.body, annotatedText: convertText(action.payload.body)})
        });
    }
    else if (action.type === actions.POST_ANNOTATION){
        return handle (state, action, {
            start: prevState => ({ ...prevState, postingAnnotation: true, serverError: null}),
            finish: prevState => ({ ...prevState, postingAnnotation: false }),
            failure: prevState => ({ ...prevState, serverError: action.payload.body}),
            success: prevState => ({...prevState})
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
    else if (action.type===actions.GET_ANNOTATIONS){
        return handle (state,action,{
            start: prevState => ({ ...prevState, areAnnotationsLoading: true, annotationsError: null}),
            finish: prevState => ({ ...prevState, areAnnotationsLoading: false }),
            failure: prevState => ({ ...prevState, annotationsError: action.payload.body}),
            success: prevState => ({...prevState,  recentAnnotations: action.payload.body.annotations})
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
    else if (action.type === actions.SET_ANNOTATED_TEXT){
        return Object.assign({}, state, {
            annotatedText: action.annotatedText,
            annotation: {Resources:"foo"}
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
            externalLinks: ["Sorry, no external links found for this entry."],
            annotatedText: null,
            areAnnotationsLoading:false
        })
    }
    else return state;
}