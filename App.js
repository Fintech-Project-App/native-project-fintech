/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import Routes from './src/Routes/MainNaigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/Redux/store';
import SplashScreen from 'react-native-splash-screen';

function App(props) {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}
export default App;
