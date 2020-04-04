import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { RNCamera } from 'react-native-camera';
import { Spinner } from 'native-base';
import jwtDecode from 'jwt-decode';
function ScanQR(props) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 8, backgroundColor: 'grey', marginBottom: -30 }}>
        <View style={{ flexDirection: 'row', height: 120 }}>
          <TouchableOpacity
            style={{ width: 50, marginTop: 25 }}
            onPress={() => props.navigation.goBack()}
          >
            <Icons name="chevron-left" size={20} style={style.backIcon} />
          </TouchableOpacity>
          <Text style={style.title}>Scan to pay</Text>
        </View>
        <RNCamera
          ref={useRef(null)}
          style={{
            flex: 1,
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
          }}
          onGoogleVisionBarcodesDetected={(payloadBarcode) => {
            const data = payloadBarcode.barcodes.map((codes) => codes.data)[0];
            const user = jwtDecode(data);
            if (user) {
              props.navigation.navigate('Transfer', {
                userId: user.id,
              });
            }
          }}
        >
          <Spinner />
        </RNCamera>
      </View>
      <View
        style={{
          marginBottom: -20,
          flex: 2,
          backgroundColor: 'white',
          borderRadius: 25,
          paddingHorizontal: 30,
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            marginTop: 17,
            fontWeight: 'bold',
            fontSize: 16,
          }}
        >
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
    width: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
    marginTop: 25,
    marginRight: '25%',
    marginLeft: '25%',
    marginBottom: 20,
  },
});
export default ScanQR;
