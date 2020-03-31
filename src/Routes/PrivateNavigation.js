import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

function PrivateNavigation(props) {
  const Stack = createStackNavigator();
  return (
    <></>
    // <Stack.Navigator
    //   screenOptions={{
    //     headerShown: false,
    //   }}>
    //   <Stack.Screen name="Main" component={MainScreens} />
    //   <Stack.Screen name="DetailScreens" component={DetailScreen} />
    // </Stack.Navigator>
  );
}

export default PrivateNavigation;
