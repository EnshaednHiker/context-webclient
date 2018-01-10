import * as actions from '~/actions';

const initialState = {
    showModal: false
};


export default function dashboardUi (state = initialState, action) {
    if (action.type === actions.SHOW_MODAL){
        return Object.assign({}, state,{
            showModal: true
        })
    }
    else if (action.type === actions.HIDE_MODAL){
        return Object.assign({}, state,{
            showModal: false
        })
    }
    else return state;
};