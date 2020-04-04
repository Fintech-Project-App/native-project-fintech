import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Overlay } from 'react-native-elements';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';
import UserQRCode from 'react-native-qrcode-svg';
function QRCode(props) {
  const { token } = useSelector(state => state.userData);
  return (
    <View>
      <Overlay
        isVisible={props.isVisible}
        windowBackgroundColor="rgba(46, 46, 46, .9)"
        overlayBackgroundColor="white"
        width={300}
        height={400}
        borderRadius={10}
        style={{ padding: 20 }}
        overlayStyle={{ paddingTop: 40, paddingHorizontal: 25 }}
      >
        <>
          <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: -10 }}>
            QR Code
          </Text>
          <Text
            style={{
              fontSize: 12,
              marginTop: 4,
              marginBottom: 35,
              color: '#5f5f5f'
            }}
          >
            Show this for fellow Quick Cash transfers
          </Text>
          <View style={{ alignItems: 'center' }}>
            <UserQRCode value={token} size={210} />
          </View>
          <View
            style={{
              alignSelf: 'center',
              alignItems: 'center',
              marginTop: 40
            }}
          >
            <TouchableOpacity onPress={() => props.setHideVisible(false)}>
              <Icons name="chevron-down" size={20} />
            </TouchableOpacity>
          </View>
        </>
      </Overlay>
    </View>
  );
}

const style = StyleSheet.create({
  confirm: {
    marginTop: 50,
    width: '50%',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#53C9BE',
    elevation: 4
  }
});
export default QRCode;
