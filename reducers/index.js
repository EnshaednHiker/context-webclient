import { combineReducers } from 'redux';
import annotations from './annotations';
import user from './user';
import mainUi from './mainUi';
import dashboardUi from './dashboardUi'


export default combineReducers({
    annotations,
    user,
    mainUi,
    dashboardUi
  })