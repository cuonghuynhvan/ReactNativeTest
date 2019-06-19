import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RootNavigator from './modules/Navigations/root.navigator';
import configureStore from './redux';

const { store, persistor } = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <RootNavigator />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
