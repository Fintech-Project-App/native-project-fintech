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
import NetInfo from '@react-native-community/netinfo'
import { Toast, Root } from 'native-base'
function App(props) {
  React.useEffect(() => {
    SplashScreen.hide();
    NetInfo.fetch().then(state => {
      if (!state.isConnected) {
        Toast.show({
          text: 'No Internet Connection',
          buttonText: 'Ok',
          duration: 15000,
          position: 'bottom',
          type: "warning"
        })
      }
    });
  }, []);
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
