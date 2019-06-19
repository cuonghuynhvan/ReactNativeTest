import { createAction } from 'redux-actions';
import { setLoading, resetLoading } from '../../../utils/reducer.util';

import { register } from '../../../fakeAPI/fake.api';

const registerAPI = (user) => register(user);

export const actionType = 'AUTHENTICATION/REGISTER';
const action = createAction(actionType, registerAPI);

const caseReducer = {
  [actionType]: {
    BEGIN: setLoading,
    SUCCESS: resetLoading,
    FAILURE: resetLoading
  }
};

export default {
  action,
  caseReducer
};
