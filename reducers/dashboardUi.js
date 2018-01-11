import * as actions from '~/actions';

const initialState = {
    showModal: false,
    showConvertedText: false
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
    else if (action.type === actions.SHOW_CONVERTED_TEXT){
        return Object.assign({}, state,{
            showConvertedText: true
        })
    }
    else if (action.type === actions.HIDE_CONVERTED_TEXT){
        return Object.assign({}, state,{
            showConvertedText: false
        })
    }
    else return state;
};