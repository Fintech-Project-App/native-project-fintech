import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
function Method(props) {
  return (
    <View style={{ height: 600, marginTop: 50, marginBottom: 30 }}>
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
        <Image
          source={props.image}
          style={{
            width: 150,
            height: 130,
            resizeMode: 'cover',
            borderWidth: 1
          }}
        />
      </View>
    </View>
  );
}
export default Method;

const style = StyleSheet.create({});
