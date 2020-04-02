import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome5';
import InputValue from './InputValue';

function ScanQR(props) {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <View style={{ flex: 1 }}>
      {isVisible && (
        <InputValue isVisible={isVisible} setIsVisible={setIsVisible} />
      )}
      <View style={{ flex: 8, backgroundColor: 'grey', marginBottom: -30 }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{ width: 50, marginTop: 25 }}
            onPress={() => props.navigation.goBack()}>
            <Icons name="chevron-left" size={20} style={style.backIcon} />
          </TouchableOpacity>
          <Text style={style.title}>Scan to pay</Text>
        </View>
      </View>
      <View
        style={{
          marginBottom: -20,
          flex: 2,
          backgroundColor: 'white',
          borderRadius: 25,
          paddingHorizontal: 30
        }}>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 17,
            fontWeight: 'bold',
            fontSize: 16
          }}>
          Position the scanner to the QR Code
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  backIcon: {
    color: 'white',
    marginLeft: 15,
    width: 20
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
    marginTop: 25,
    marginRight: '25%',
    marginLeft: '25%',
    marginBottom: 20
  }
});
export default ScanQR;
