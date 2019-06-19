import { reducerGenerator } from '../../utils/reducer.util';

import login from './actions/login.action';
import logout from './actions/logout.action';
import register from './actions/register.action';

const initialState = {
  isLogin: false,
  user: {}
};

const { actions, reducer } = reducerGenerator(
  {
    login,
    logout,
    register
  },
  initialState
);

export { actions };
export default reducer;
