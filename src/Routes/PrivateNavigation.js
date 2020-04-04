import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './Components/Main';
import ProfileUpdate from '../Screens/Profile/ProfileUpdate';
import TopupNavigate from './Components/TopupNavigate';
import TransferNavigate from './Components/TransferNavigation';
import HistoryNavigate from './Components/HistoryNavigate';
import Transfers from '../Screens/Transaction/Transfer';
import Header from '../Screens/Profile/Component/Header';
import OnProgress from '../Components/OnProgress';
import ChangePassword from '../Screens/Security/ChangePassword';
import SecurityCode from '../Screens/Security/SecurityCode';
import HistoryDetail from '../Screens/Transaction/HistoryDetail';

function PrivateNavigation(props) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="TopupNavigate" component={TopupNavigate} />
      <Stack.Screen name="TransferNavigate" component={TransferNavigate} />
      <Stack.Screen name="ProfileUpdate" component={ProfileUpdate} />
      <Stack.Screen name="Transfer" component={Transfers} />
      <Stack.Screen name="HistoryNavigate" component={HistoryNavigate} />
      <Stack.Screen name="Header" component={Header} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="SecurityCode" component={SecurityCode} />
      <Stack.Screen name="HistoryDetail" component={HistoryDetail} />
      <Stack.Screen name="OnProgress" component={OnProgress} />
    </Stack.Navigator>
  );
}

export default PrivateNavigation;
