import { createAction } from 'redux-actions';

const actionType = 'AUTHENTICATION/LOGOUT';
const action = createAction(actionType);

const logoutHandler = (state) => {
  return {
    ...state,
    isLogin: false,
    user: {}
  };
};

const caseReducer = {
  [actionType]: logoutHandler
};

export default {
  action,
  caseReducer
};
