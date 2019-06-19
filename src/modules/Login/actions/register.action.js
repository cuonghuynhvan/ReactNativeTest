import { actionType } from '../../Register/actions/register.action';

const registerHandler = (state, { payload }) => ({
  ...state,
  isLogin: true,
  user: payload
});

const caseReducer = {
  [actionType]: {
    SUCCESS: registerHandler
  }
};

export default {
  caseReducer
};
