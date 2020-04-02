import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PrivateNavigator from './PrivateNavigation';
import PublicNavigator from './Public.Navigation';
import Splash from '../Screens/Splash/Splash';
import {useSelector} from 'react-redux';
function MainRoutes(props) {
  const {isLogin} = useSelector((state) => state.userData);
  console.log(useSelector((state) => state.userData));
  if (isLogin === true) {
    return <PrivateNavigator />;
  } else {
    return <PublicNavigator />;
  }
}

function MainNavigation(props) {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="MainRoutes" component={MainRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainNavigation;
