import system from '~/system';

/***************Main UI ACTIONS******************/

export const HAMBURGER_CLICK = "HAMBURGER_CLICK";
export const hamburgerClick = boolean => ({
    type: HAMBURGER_CLICK,
    boolean
});

export const SCROLL_AT_TOP = "SCROLL_AT_TOP";
export const scrollAtTop = boolean => ({
    type: SCROLL_AT_TOP,
    boolean
});

export const COLLAPSE_MENU = "COLLAPSE_MENU";
export const collapseMenu = (click) => ({
    type: COLLAPSE_MENU,
    click
});

export const TOGGLE__HAMBURGER_MENU = "TOGGLE__HAMBURGER_MENU";
export const toggleHamburgerMenu = (click) => ({
    type: TOGGLE__HAMBURGER_MENU,
    click
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

export const SET_ANNOTATION_STRING = "SET_ANNOTATION_STRING";
export const setAnnotationString = (annoString) => ({
    type: SET_ANNOTATION_STRING,
    annoString
});

export const CLEAR_ANNOTATION = "CLEAR_ANNOTATION";
export const clearAnnotation = () => ({
    type: CLEAR_ANNOTATION
});



/********************API CALL ACTIONS************************/

export const ANNOTATE = 'ANNOTATE';
export function annotate(annoString) {
    return {
        type: ANNOTATE,
        promise: system.API.GET_OUTSIDE_RESOURCE('', {text:annoString}, {confidence:0.9}),
        meta: {
            onSuccess: (result, getState) => {
                let resources = result.body.Resources;
                let text = getState().annotations.annoString
                markUpText(text, resources);
            }
            // onSuccess: (result, getState) => {
            //     const annotation = result;
            //     postAnnotation(annotation);
            // }
        }
    }
}

export const MARK_UP_TEXT = "MARK_UP_TEXT";
export const markUpText = (text, resources) => {
    type: MARK_UP_TEXT,
    text,
    resources
}

export const POST_ANNOTATION = 'POST_ANNOTATION';
export function postAnnotation(annotation) {
    return {
        type: POST_ANNOTATION,
        promise: system.API.POST()
    }
}

export const GET_ANNOTATIONS = 'GET_ANNOTATIONS';
export function getAnnotations() {

}

export const DELETE_ANNOTATIONS = 'DELETE_ANNOTATIONS';
export function deleteAnnotations () {

}

export const REGISTER = 'REGISTER';
export function register(payload){
    return {
        type: REGISTER,
        promise: system.API.POST('/users',{"payload":payload}),
        meta: {
            onSuccess: (result, getState) => {
                if (result.status===201){
                    return system.API.POST("/users/login",{payload:payload})
                        .then((res)=>{
                            //save the token to local storage
                            window.localStorage.setItem(process.env.TOKEN, res.body.user.token);
                            //redirect to meaningful page
                            window.location.hash='#/dashboard';
                        })
                        .catch((err)=>{
                            console.warn(err);
                        });
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
                //save the token to local storage
                window.localStorage.setItem(process.env.TOKEN, result.body.user.token);
                //redirect to meaningful page
                window.location.hash='#/dashboard';
            }
        }
    }
}

export const GET_USER = 'GET_USER';
export function getUser () {

}

export const LOGOUT = 'LOGOUT';
export function logout () {

}

export const DELETE_USER = 'DELETE_USER';
export function deleteUser () {

}
