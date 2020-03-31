import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StartScreen from '../Screens/Auth/StartScreen';
import Login from '../Screens/Auth/Login';
import Register from '../Screens/Auth/Register';
import Verify from '../Screens/Auth/Verify';
import ForgotPassword from '../Screens/Auth/Forgot-Password';

function PublicNavigation(props) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen
        name="AccountVerify"
        component={Verify}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
}

export default PublicNavigation;
