import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './Components/Main';
import ProfileUpdate from '../Screens/Profile/ProfileUpdate';
import TopupNavigate from './Components/TopupNavigate';

function PrivateNavigation(props) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="TopupNavigate" component={TopupNavigate} />
      <Stack.Screen name="ProfileUpdate" component={ProfileUpdate} />
    </Stack.Navigator>
  );
}

export default PrivateNavigation;
