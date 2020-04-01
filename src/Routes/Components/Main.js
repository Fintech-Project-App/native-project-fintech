import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Home from '../../Screens/Home/Home';
import Profile from '../../Screens/Profile/Profile';
import ScanQR from '../../Screens/Scanning/ScanQR';
import Icon from 'react-native-vector-icons/FontAwesome5';

function Main(props) {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Profile':
              iconName = 'portrait';
              break;
            case 'ScanQR':
              iconName = 'qrcode';
              return (
                <LinearGradient
                  colors={['#5eccbc', '#3f7e77']}
                  style={{
                    position: 'absolute',
                    backgroundColor: '#5eccbc',
                    width: 60,
                    height: 60,
                    top: -20,
                    borderRadius: 50,
                    borderWidth: 5,
                    borderWidthColor: 'white',
                    elevation: 3,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View>
                    <Icon name={iconName} size={25} color="white" />
                  </View>
                </LinearGradient>
              );
            default:
              iconName = 'opencart';
              break;
          }
          return <Icon name={iconName} size={22} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#60cbbc',
        inactiveTintColor: '#bababa',
        showLabel: false,
        style: {
          position: 'relative',
          backgroundColor: '#fff',
        },
      }}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: true}} />
      <Tab.Screen name="ScanQR" component={ScanQR} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default Main;
