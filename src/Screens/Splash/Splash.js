import React from 'react';
import {View, Text, Image, Button} from 'react-native';

export default function Splash(props) {
  React.useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('MainRoutes');
    }, 4000);
  }, []);
  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#63c8be',
        }}>
        <Image
          source={require('../../Helpers/Image/QCSplash.png')}
          style={{marginTop: -50, width: 160, height: 130}}
        />
      </View>
    </>
  );
}
