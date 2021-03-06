import * as actions from '~/actions';
import { handle } from 'redux-pack'; 
import system from '~/system';

const initialState = {
    user: system.identity(),
    userAuth: system.authorization(system.identity()),
    loginError: false,
    username: null,
    email: null,
    confirmEmail: null,
    password: null,
    confirmPassword: null,
    usernameValidationError: false,
    emailValidationError: false,
    location: window.location.hash,
    //state for loading screens
    isUserLoading: false    
};

//block handles validation errors to make sure user doesn't mis-enter email or password and that the username hasn't already been taken
function validationError (error, errorType) {
    console.warn(error.response.text);
    let valError = JSON.parse(error.response.text);
    if (error.response.status===500){
        let errorKeys = Object.keys(valError.errors);
    
        function hasError (element){
            //errorType currently set to be either a string of "email" or "username"
            return element === errorType;
        }
    
        return errorKeys.find(hasError)
    }
    else {
        return false;
    }
}

function loginError (error) {
    console.warn(error)
    return true
}

function setUserAuth (res){
    window.localStorage.setItem(process.env.TOKEN, res.body.user.token);
    let user = system.identity()
    return system.authorization(user)
}

function setToken (res){
    //save the token to local storage
    window.localStorage.setItem(process.env.TOKEN, res.body.user.token);
    //redirect to meaningful page
    window.location.hash='#/dashboard';
    return system.identity()
}

export default function user (state = initialState, action) {
    if (action.type === actions.REGISTER){
        return handle (state, action, {
            start: prevState => ({ ...prevState, isUserLoading: true, usernameValidationError: false, emailValidationError: false}),
            finish: prevState => ({ ...prevState, isUserLoading: false }),
            failure: prevState => ({ ...prevState, usernameValidationError: validationError(action.payload ,'username') ,emailValidationError:validationError(action.payload,'email')}),
            success: prevState => ({ ...prevState, usernameValidationError: false, emailValidationError: false })
        });
    }
    else if (action.type ===actions.LOGIN){
        return handle (state, action, {
            start: prevState => ({ ...prevState, isUserLoading: true, loginError: false}),
            finish: prevState => ({ ...prevState, isUserLoading: false }),
            failure: prevState => ({ ...prevState, loginError: loginError(action.payload)}),
            success: prevState => ({ ...prevState, user: setToken(action.payload),userAuth: setUserAuth(action.payload), loginError: false})
        });
    }
    else if (action.type === actions.SET_EMAIL) {
        
        return Object.assign({}, state, {
            email: action.email
        })
    }
    else if (action.type === actions.SET_CONFIRM_EMAIL) {
        
        return Object.assign({}, state, {
            confirmEmail: action.confirmEmail
        })
    }
    else if (action.type === actions.SET_PASSWORD) {
        
        return Object.assign({}, state, {
            password: action.password
        })
    }
    else if (action.type === actions.SET_CONFIRM_PASSWORD) {
        
        return Object.assign({}, state, {
            confirmPassword: action.confirmPassword
        })
    }

    else if (action.type === actions.LOGOUT){
        window.localStorage.removeItem(process.env.TOKEN);
        window.location.hash='#';
        return Object.assign({},state,{
            user: system.identity(),
            userAuth: system.authorization(system.identity()),
            loginError: false,
            usernameValidationError: false,
            emailValidationError: false 
        });
    }
    else if(action.type ===actions.CLEAR_CREDENTIALS){
        return Object.assign({},state,{
            username: null,
            email: null,
            confirmEmail: null,
            password: null,
            confirmPassword: null
        })
    }
    else if(action.type === actions.SET_LOCATION){
        return Object.assign({},state,{
            location: action.location
        })
    }
    else return state;
}