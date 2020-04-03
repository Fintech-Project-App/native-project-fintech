import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

function Header(props) {
  return (
    <View>
      <LinearGradient colors={['#59cfbe', '#59cfbe']}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: ''
          }}>
          <TouchableOpacity
            style={{ width: 50, marginTop: 25 }}
            onPress={() => props.navigation.navigate('Home')}>
            <Icons name="chevron-left" size={20} style={style.backIcon} />
          </TouchableOpacity>
          <Text style={style.title}>History</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const style = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
    marginTop: 25,
    marginLeft: 30,
    marginBottom: 20
  },
  backIcon: {
    color: 'white',
    marginLeft: 15,
    width: 20
  }
});
export default Header;
