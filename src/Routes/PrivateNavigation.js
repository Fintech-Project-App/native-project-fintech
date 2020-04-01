import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './Components/Main';
import ProfileUpdate from '../Screens/Profile/ProfileUpdate';
import Topup from '../Screens/Profile/TopUp';

function PrivateNavigation(props) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="ProfileUpdate" component={ProfileUpdate} />
      <Stack.Screen name="Topup" component={Topup} />
    </Stack.Navigator>
  );
}

export default PrivateNavigation;
