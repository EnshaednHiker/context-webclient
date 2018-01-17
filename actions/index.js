import system from '~/system';
import store from '~/public/store.js';


/***************Main UI ACTIONS******************/

export const SCROLL_AT_TOP = "SCROLL_AT_TOP";
export const scrollAtTop = boolean => ({
    type: SCROLL_AT_TOP,
    boolean
});

export const TOGGLE_FORM = "TOGGLE_FORM";
export const toggleForm = (boolean) => ({
    type: TOGGLE_FORM,
    boolean
});

/***************MAIN UI USER ACTIONS***************/

export const SET_EMAIL = "SET_EMAIL";
export const setEmail = (email) => ({
    type: SET_EMAIL,
    email
});

export const SET_CONFIRM_EMAIL = "SET_CONFIRM_EMAIL";
export const setConfirmEmail = (confirmEmail) => ({
    type: SET_CONFIRM_EMAIL,
    confirmEmail
});

export const SET_PASSWORD = "SET_PASSWORD";
export const setPassword = (password) => ({
    type: SET_PASSWORD,
    password
});

export const SET_CONFIRM_PASSWORD = "SET_CONFIRM_PASSWORD";
export const setConfirmPassword = (confirmPassword) => ({
    type: SET_CONFIRM_PASSWORD,
    confirmPassword
});

/********************Dashboard UI ACTIONS*********************/


export const SHOW_MODAL = "SHOW_MODAL";
export const showModal = () => ({ 
     type: SHOW_MODAL
});

export const HIDE_MODAL = "HIDE_MODAL";
export const hideModal = () => ({
    type: HIDE_MODAL
});

export const SHOW_RECENT_ANNOTATIONS_MODAL = "SHOW_RECENT_ANNOTATIONS_MODAL";
export const showRecentAnnotationsModal = () => ({
    type: SHOW_RECENT_ANNOTATIONS_MODAL
})

export const HIDE_RECENT_ANNOTATIONS_MODAL = "HIDE_RECENT_ANNOTATIONS_MODAL";
export const hideRecentAnnotationsModal = () => ({
    type: HIDE_RECENT_ANNOTATIONS_MODAL
})

export const SHOW_CONVERTED_TEXT = "SHOW_CONVERTED_TEXT";
export const showConvertedText = () => ({
    type: SHOW_CONVERTED_TEXT
});

export const HIDE_CONVERTED_TEXT = "HIDE_CONVERTED_TEXT";
export const hideConvertedText = () => ({
    type: HIDE_CONVERTED_TEXT
});


/*********************USER ACTIONS****************************/

export const REGISTER = 'REGISTER';
export function register(payload){
        return {
            type: REGISTER,
            promise: system.API.POST('/users',{"payload":payload}),
            meta: {
                onSuccess: (result, getState) => {
                    if (result.status===201){
                        store.dispatch(login(payload));
                    }
                },
                onFailure: (err, getState) => {
                    console.warn(err);
                }
            }
        }
    }
    

export const LOGIN = 'LOGIN';
export function login (payload) {
    
    return {
        type: LOGIN,
        promise: system.API.POST('/users/login',{payload:payload}),
        meta: {
            onSuccess: (result, getState) => {
                console.log("login dispatched!",result);
            }
        }
    }
}

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
    type: LOGOUT
});

//Future functionality I would like to add
// export const DELETE_USER = 'DELETE_USER';
// export function deleteUser (userId) {
    
//     return {
//         type: DELETE_USER,
//         promise: system.API.DELETE(`/users/${userId}`),
//         meta: {
//             onSuccess: (result, getState) => {
//                 console.log("user account deleted!",result);
//             }
//         }
//     }
// }


/********************ANNOTATION ACTIONS************************/

export const SET_ANNOTATION_STRING = "SET_ANNOTATION_STRING";
export const setAnnotationString = (annoString) => ({
    type: SET_ANNOTATION_STRING,
    annoString
});

export const CLEAR_ANNOTATION = "CLEAR_ANNOTATION";
export const clearAnnotation = () => ({
    type: CLEAR_ANNOTATION
});

export const ANNOTATE = 'ANNOTATE';
export function annotate(annoString) {
    return {
        type: ANNOTATE,
        promise: system.API.GET_OUTSIDE_RESOURCE('', {text:annoString}, {confidence:0.9}),
        meta: {
            onSuccess: (result, getState) => {
                let currentStore=getState();
                let user = system.identity();
                console.log("currentStore.annotations.annotatedText",currentStore.annotations.annotatedText);
                if(currentStore.annotations.annotatedText.Resources !== undefined || Array.isArray(currentStore.annotations.annotatedText)){
                    let payload = {annotation: currentStore.annotations.annotatedText}
                    store.dispatch(showConvertedText());
                    store.dispatch(postAnnotation(payload,user.id))
                }
                else{
                    console.warn("annotated text returned no resources, try again: ",currentStore.annotations.annotatedText);
                }
            }
        }
    }
}

export const GET_ARTICLE_JSON = 'GET_ARTICLE_JSON';
export function getArticleJson(url) {
    return {
        type: GET_ARTICLE_JSON,
        promise: system.API.GET_OUTSIDE_ARTICLE(url),
        meta: {
            onSuccess: (result, getState) => {
                store.dispatch(showModal())
            }

        }
    }
}


export const SET_ARTICLE_URL = "SET_ARTICLE_URL";
export const setArticleUrl = (url) => ({
        type: SET_ARTICLE_URL,
        url
});

export const SET_ARTICLE_WORD = "SET_ARTICLE_WORD";
export const setArticleWord = (word) => ({
        type: SET_ARTICLE_WORD,
        word
});

export const POST_ANNOTATION = 'POST_ANNOTATION';
export function postAnnotation(payload,userId) {
    return {
        type: POST_ANNOTATION,
        promise: system.API.POST(`/user/${userId}/annotations`, payload),
        meta: {
            onSuccess: (result, getState) => {
                //console.log("result.body from posting annotation to server: ", result.body);
            }
        }
    }
}

export const GET_ANNOTATIONS = 'GET_ANNOTATIONS';
export function getAnnotations(userId) {
    return {
        type: GET_ANNOTATIONS,
        promise: system.API.GET(`/user/${userId}/annotations`),
        meta: {
            onSuccess: (result, getState) => {
                //console.log("result.body from getting annotations from server: ", result.body);
            }
        }
    }
}

export const SET_ANNOTATED_TEXT = "SET_ANNOTATED_TEXT";
export const setAnnotatedText = (annotatedText) => {
    return {type: SET_ANNOTATED_TEXT, annotatedText}
};

//Future functionality that I'd like to add
// export const DELETE_ANNOTATIONS = 'DELETE_ANNOTATIONS';
// export function deleteAnnotations () {

// }

/**************ROUTER ACTIONS****************/

export const SET_LOCATION = "SET_LOCATION";
export const setLocation = (location) => ({
    type: SET_LOCATION,
    location
});


