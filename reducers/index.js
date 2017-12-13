import * as actions from '~/actions';
import { handle } from 'redux-pack';
import { combineReducers } from 'redux';
import annotations from './annotations';
import user from './user';
import mainUi from './mainUi';


export default combineReducers({
    annotations,
    user,
    mainUi
  })








// const initialState = {
//     isTop: true,
//     isCollapsed: true,
//     user: {
//         userToken: null,
//         isUserLoading: false,
//         userError: null    
//     }

// };

// export const rootReducer = (state = initialState, action) => {
        
//     if (action.type === actions.HAMBURGER_CLICK) {
//         return Object.assign({}, state,{
//                 isCollapsed: action.boolean
//             })
//     }

//     else if (action.type === actions.SCROLL_AT_TOP){
//         return Object.assign({}, state,{
//             isTop: action.boolean
//         })
//     }
//     else if (action.type === actions.COLLAPSE_MENU){
//         return Object.assign({}, state, {
//             isCollapsed: true
//         })
//     }
//     else if (action.type === actions.SET_ANNOTATION_STRING){
//         console.log(action);
//         return Object.assign({}, state, {
//             annoString: action.annoString
//         })
//     }
//     else if (action.type === actions.ANNOTATE){
//         return handle (state, action, {
//             start: prevState => ({ ...prevState, isAnnoLoading: true, dbPediaError: null}),
//             finish: prevState => ({ ...prevState, isAnnoLoading: false }),
//             failure: prevState => ({ ...prevState, dbPediaError: action.payload.body }),
//             success: prevState => ({ 
//                 ...prevState, 
//                 annotation: action.payload.body,
//                 recentAnnotations: state.recentAnnotations.pop(action.payload.body)
//             })
//         });
//     }
//     else if (action.type === actions.REGISTER){
//         return handle (state, action, {
//             start: prevState => ({ ...prevState, user[isUserLoading]: true, user.userError: null}),
//         });
//     }
//     else return state;
// };