import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from '../Screens/Auth/StartScreen';
import Login from '../Screens/Auth/Login';
import Register from '../Screens/Auth/Register';
import Verify from '../Screens/Auth/Verify';
import VerifySuccess from '../Screens/Auth/VerifySuccess';
import CheckUsername from '../Screens/Auth/CheckUsername';
import ChangePassword from '../Screens/Auth/ChangePassword';

function PublicNavigation(props) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Verify" component={Verify} />
      <Stack.Screen name="VerifySuccess" component={VerifySuccess} />
      <Stack.Screen name="CheckUsername" component={CheckUsername} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Navigator>
  );
}

export default PublicNavigation;
