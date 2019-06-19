import { reducerGenerator } from '../../utils/reducer.util';

import register from './actions/register.action';

const initialState = {
  errors: {}
};

const { actions, reducer } = reducerGenerator(
  {
    register
  },
  initialState
);

export { actions };
export default reducer;
