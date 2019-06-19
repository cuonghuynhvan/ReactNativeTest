import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createPromise } from 'redux-promise-middleware';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import { rootPersistConfig } from './persist';

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export default (initialState) => {
  const middleware = [
    thunk,
    createPromise({
      promiseTypeSuffixes: ['BEGIN', 'SUCCESS', 'FAILURE']
    })
  ];

  const composeEnhancers = composeWithDevTools({});

  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware)
      // other store enhancers if any
    )
  );
  const persistor = persistStore(store);

  return { store, persistor };
};
