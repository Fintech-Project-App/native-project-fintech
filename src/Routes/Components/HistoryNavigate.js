import React from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HistoryTopup from '../../Screens/Transaction/HistoryTopup';
import HistoryTransaction from '../../Screens/Transaction/HistoryTransac';
import Header from '../../Screens/Transaction/Components/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createMaterialTopTabNavigator();

export default function TopupNavigate() {
  return (
    <>
      <Header />

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case 'Topup':
                iconName = 'home';
                break;
              case 'Transaction':
                iconName = 'portrait';
                break;
              default:
                iconName = 'opencart';
                break;
            }
            return <Icon name={iconName} size={22} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#50b5a6',
          inactiveTintColor: '#6d6d6d',
          pressColor: 'grey',
          pressOpacity: 'black',
          labelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            textTransform: 'capitalize',
          },
          indicatorStyle: { backgroundColor: 'transparent' },
          style: {
            backgroundColor: 'white',
            borderRadius: 20,
            width: '80%',
            alignSelf: 'center',
            marginBottom: 10,
          },
        }}>
        <Tab.Screen name="Topup" component={HistoryTopup} />
        <Tab.Screen name="Transaction" component={HistoryTransaction} />
      </Tab.Navigator>
    </>
  );
}
