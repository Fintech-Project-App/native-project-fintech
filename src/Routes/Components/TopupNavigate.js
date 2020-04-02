import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Topup from '../../Screens/Profile/TopUp';
import TopupOther from '../../Screens/Profile/TopUpOther';

const Tab = createMaterialTopTabNavigator();

export default function TopupNavigate() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        pressColor: 'grey',
        pressOpacity: 'black',
        labelStyle: {fontSize: 12, color: 'white', fontWeight: 'bold'},
        indicatorStyle: {backgroundColor: 'white'},
        // tabStyle: {width: 100},
        style: {backgroundColor: '#59cfbe'},
      }}>
      <Tab.Screen name="Instant topup" component={Topup} />
      <Tab.Screen name="Other method" component={TopupOther} />
    </Tab.Navigator>
  );
}
