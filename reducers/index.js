import * as actions from '~/actions';

const initialState = {
    
};

export const contextReducer = (state = initialState, action) => {
        
    if (action.type === actions.ACTION1) {
        return Object.assign({}, state,{
            
            })
    }

    else if (action.type === actions.ACTION2){
        return Object.assign({}, state,{
        
        })
    }
    else return state;
};