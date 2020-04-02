import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './Components/Main';
import ProfileUpdate from '../Screens/Profile/ProfileUpdate';
import TopupNavigate from './Components/TopupNavigate';
import Header from '../Screens/Profile/Component/Header';
import OnProgress from '../Components/OnProgress';
import Method from '../Screens/Home/Components/Method';

function PrivateNavigation(props) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="TopupNavigate" component={TopupNavigate} />
      <Stack.Screen name="ProfileUpdate" component={ProfileUpdate} />
      <Stack.Screen name="Header" component={Header} />
      <Stack.Screen name="Method" component={Method} />
      <Stack.Screen name="OnProgress" component={OnProgress} />
    </Stack.Navigator>
  );
}

export default PrivateNavigation;
