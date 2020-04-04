import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

function Header(props) {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#f3f3f3',
        }}>
        <TouchableOpacity
          style={{ width: 50, marginTop: 25 }}
          onPress={() => props.navigation.navigate('Home')}>
          <Icons name="chevron-left" size={20} style={style.backIcon} />
        </TouchableOpacity>
        <Text style={style.title}>History</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#474747',
    marginTop: 25,
    marginLeft: 30,
    marginBottom: 20,
  },
  backIcon: {
    color: '#474747',
    marginLeft: 15,
    width: 20,
  },
});
export default Header;
