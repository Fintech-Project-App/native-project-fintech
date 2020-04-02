import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';

function TopupOther(props) {
  return (
    <View style={{flex: 1, backgroundColor: '#eeeded'}}>
      <View style={{flex: 6}}>
        <View
          style={{
            backgroundColor: '#f6f6f8',
            paddingHorizontal: 30,
            paddingTop: 20,
            paddingBottom: 20,
          }}>
          <Text style={{color: 'grey', marginBottom: 3, fontSize: 12}}>
            Top Up Balance To
          </Text>
          <Text style={style.title}>Quick Cash</Text>
          <View style={style.line} />
          <View style={style.square}>
            <Text style={style.blockTitle}>Saldo Quick Cash</Text>
            <Text style={{...style.blockTitle, fontWeight: 'bold'}}>
              Rp. 10.000
            </Text>
          </View>
          <Text style={style.textMax}>
            Maximum balance of quick cash Rp 5.000.000
          </Text>
        </View>
        <View
          style={{paddingTop: 13, paddingHorizontal: 30, alignItems: 'center'}}>
          <Text style={{...style.textMax, fontSize: 14}}>
            Use this method to make it easier for you
          </Text>
        </View>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#646464',
  },
  square: {
    backgroundColor: 'grey',
    padding: 10,
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 15,
    borderColor: '#e5e4e4',
    backgroundColor: '#f6f6f8',
  },
  blockTitle: {
    textTransform: 'uppercase',
    color: '#646464',
  },
  textMax: {
    textAlign: 'center',
    fontSize: 12,
    color: '#515151',
    marginTop: 5,
  },
  line: {
    marginTop: 5,
    borderBottomColor: '#f3f3f3',
    borderBottomWidth: 2,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 20,
  },
});
export default TopupOther;
