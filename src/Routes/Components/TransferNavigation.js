import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Transfer from '../../Screens/Transaction/Transfer';
import { YellowBox } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function TopupNavigate(props) {
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
        }}
      >
        <Tab.Screen name="Transfer" component={Transfer} />
      </Tab.Navigator>
    </>
  );
}
