/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import Routes from './src/Routes/MainNaigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/Redux/store';
import { Root } from 'native-base'
function App(props) {
  return (
    <Root>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    </Root>
  );
}
export default App;
