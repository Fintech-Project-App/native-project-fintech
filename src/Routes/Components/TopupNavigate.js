import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Topup from '../../Screens/Profile/TopUp';
import TopupOther from '../../Screens/Profile/TopUpOther';
import Header from '../../Screens/Profile/Component/Header';

const Tab = createMaterialTopTabNavigator();

export default function TopupNavigate() {
  return (
    <>
      <Header />
      <Tab.Navigator
        tabBarOptions={{
          pressColor: 'grey',
          pressOpacity: 'black',
          labelStyle: {
            fontSize: 14,
            color: 'white',
            fontWeight: 'bold',
            textTransform: 'capitalize',
          },
          indicatorStyle: { backgroundColor: 'white' },
          style: { backgroundColor: '#59cfbe' },
        }}>
        <Tab.Screen name="Instant topup" component={Topup} />
        <Tab.Screen name="Other method" component={TopupOther} />
      </Tab.Navigator>
    </>
  );
}
