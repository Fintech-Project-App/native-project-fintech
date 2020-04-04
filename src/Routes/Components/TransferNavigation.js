import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Topup from '../../Screens/Profile/TopUp';
import TopupOther from '../../Screens/Profile/TopUpOther';
import Header from '../../Screens/Transaction/Components/Header';
import Transfer from '../../Screens/Transaction/Transfer';

const Tab = createMaterialTopTabNavigator();

export default function TopupNavigate() {
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          pressColor: 'grey',
          labelStyle: {
            fontSize: 17,
            color: 'white',
            fontWeight: 'bold',
            textTransform: 'capitalize',
            marginBottom: 10,
            marginTop: 15,
          },
          indicatorStyle: { backgroundColor: '' },
          style: { backgroundColor: '#50b5a6' },
        }}>
        <Tab.Screen name="Transfer" component={Transfer} />
      </Tab.Navigator>
    </>
  );
}
