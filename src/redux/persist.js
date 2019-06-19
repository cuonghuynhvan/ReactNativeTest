import storage from 'redux-persist/lib/storage';

const ROOT_KEY = 'root';

const rootPersistConfig = {
  key: ROOT_KEY,
  storage,
  blacklist: ['register'],
  debug: process.env.NODE_ENV === 'development'
};

export { rootPersistConfig };
