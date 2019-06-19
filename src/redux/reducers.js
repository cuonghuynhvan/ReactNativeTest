import { combineReducers } from 'redux';

import login from '../modules/Login/Login.reducer';
import register from '../modules/Register/Register.reducer';

const rootReducer = combineReducers({
  login,
  register
});

export default rootReducer;
