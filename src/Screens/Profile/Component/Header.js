import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
function Header(props) {
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#50b5a6',
        }}
      >
        <TouchableOpacity
          style={{ width: 50, marginTop: 25 }}
          onPress={() => navigation.goBack()}
        >
          <Icons name="chevron-left" size={20} style={style.backIcon} />
        </TouchableOpacity>
        <Text style={style.title}>Top Up</Text>
      </View>
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
    marginBottom: 20,
  },
  backIcon: {
    color: 'white',
    marginLeft: 15,
    width: 20,
  },
});
export default Header;
