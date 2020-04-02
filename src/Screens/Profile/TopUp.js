import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Image, Button, Input} from 'react-native-elements';
import QCTopup from '../../Helpers/Image/QCTopup.png';

function Topup(props) {
  return (
    <View style={{flex: 1, backgroundColor: '#f6f6f8'}}>
      <View style={{flex: 6, paddingTop: 20}}>
        <ScrollView>
          <View style={{paddingHorizontal: 25}}>
            <Text style={style.title}>Top Up to</Text>
            <View style={style.container}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={QCTopup}
                  style={{width: 45, height: 37, marginRight: 18}}
                />
                <View>
                  <Text style={{fontWeight: 'bold', color: '#646464'}}>
                    Quick Cash
                  </Text>
                  <Text style={{color: '#646464', fontSize: 13}}>
                    Saldo Rp. 1000
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={style.line} />

          <View style={{paddingHorizontal: 25}}>
            <Text style={style.title}>Choose Nominal Top Up</Text>
            <View style={{flexDirection: 'row'}}>
              <Button
                title="Rp. 50.000"
                buttonStyle={style.nominal}
                titleStyle={style.nominalText}
              />
              <Button
                title="Rp. 100.000"
                buttonStyle={style.nominal}
                titleStyle={style.nominalText}
              />
              <Button
                title="Rp. 500.000"
                buttonStyle={style.nominal}
                titleStyle={style.nominalText}
              />
            </View>
            <View>
              <Text style={{...style.nominalText, marginTop: 20}}>
                Or input nominal top up here
              </Text>
              <Input
                placeholder="Minimal Rp. 10.000"
                inputContainerStyle={{...style.input}}
                inputStyle={style.inputText}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    borderWidth: 3,
    height: 70,
    borderColor: '#e5e4e4',
    borderRadius: 17,
    marginTop: 10,
    paddingLeft: 15,
    paddingVertical: 12,
  },
  line: {
    marginTop: 30,
    borderBottomColor: '#eaeaea',
    borderBottomWidth: 7,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    color: '#646464',
    fontSize: 16,
  },
  nominal: {
    marginTop: 10,
    marginHorizontal: 5,
    borderWidth: 3,
    borderRadius: 15,
    borderColor: '#e5e4e4',
    backgroundColor: '#f6f6f8',
    width: 95,
    height: 37,
    alignItems: 'center',
    alignSelf: 'center',
  },
  nominalText: {
    fontSize: 13,
    color: '#646464',
    fontWeight: '900',
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomWidth: 0,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#F5F5F5',
    marginTop: 10,
    backgroundColor: '#eaeaea',
  },
  inputText: {
    fontSize: 13,
    marginLeft: 20,
    color: '#525252',
  },
});
export default Topup;
