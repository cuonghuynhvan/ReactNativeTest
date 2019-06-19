import { createAction } from 'redux-actions';
import { setLoading, resetLoading } from '../../../utils/reducer.util';

import { login } from '../../../fakeAPI/fake.api';

const loginAPI = (user) => login(user);

const actionType = 'AUTHENTICATION/LOGIN';
const action = createAction(actionType, loginAPI);

const loginHandler = (state, { payload }) => {
  return {
    ...state,
    isLogin: true,
    user: payload
  };
};

const caseReducer = {
  [actionType]: {
    BEGIN: setLoading,
    SUCCESS: loginHandler,
    FAILURE: resetLoading
  }
};

export default {
  action,
  caseReducer
};
