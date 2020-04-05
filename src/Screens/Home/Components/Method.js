import React from 'react';
import {
  View,
  ImageBackground
} from 'react-native';
import Success from '../../../Helpers/Image/success.png';
import Pay from '../../../Helpers/Image/pay.png';
function Method(props) {
  const methode = [Success, Pay];
  return (
    <>
      {methode.map((val, i) => (
        <View key={i} style={{ height: 600, marginTop: 50, marginBottom: 30 }}>
          <View
            style={{
              width: 200,
              marginLeft: 20,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#dddddd',
              marginTop: 20,
              height: 140,
              alignItems: 'center'
            }}>
            <ImageBackground
              source={val}
              style={{
                width: 150,
                height: 130,
                resizeMode: 'cover',
              }}
            />
          </View>
        </View>
      ))}
    </>
  );
}
export default Method;
