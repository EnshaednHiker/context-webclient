import * as actions from '~/actions';
import { handle } from 'redux-pack'; 

const initialState = {
    userToken: null,
    isUserLoading: false,
    userError: null    
};


export default function user (state = initialState, action) {
    if (action.type === actions.REGISTER){
        return handle (state, action, {
            start: prevState => ({ ...prevState, isUserLoading: true, userError: null}),
        });
    }
    else return state;
}