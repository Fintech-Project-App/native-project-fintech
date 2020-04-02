import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Image, Button, Input } from 'react-native-elements';
import QCTopup from '../../Helpers/Image/QCTopup.png';

function Topup(props) {
  const [activeBtn, setActiveBtn] = React.useState(0);
  const [activeInput, setActiveInput] = React.useState(true);

  return (
    <View style={{ flex: 1, backgroundColor: '#fbfbfb' }}>
      <View style={{ flex: 6, paddingTop: 20 }}>
        <ScrollView>
          <View style={{ paddingHorizontal: 25 }}>
            <Text style={style.title}>Top Up to</Text>
            <View style={style.container}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={QCTopup}
                  style={{ width: 45, height: 37, marginRight: 18 }}
                />
                <View>
                  <Text style={{ fontWeight: 'bold', color: '#646464' }}>
                    Quick Cash
                  </Text>
                  <Text style={{ color: '#646464', fontSize: 13 }}>
                    Saldo Rp. 1000
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={style.line} />

          <View style={{ paddingHorizontal: 25 }}>
            <Text style={style.title}>Choose Nominal Top Up</Text>
            <View style={{ flexDirection: 'row' }}>
              <Button
                title="Rp. 50.000"
                buttonStyle={activeBtn === 1 ? style.nominals : style.nominal}
                titleStyle={
                  activeBtn === 1
                    ? { ...style.nominalText, color: 'black' }
                    : style.nominalText
                }
                onPress={() => setActiveBtn(1)}
              />
              <Button
                title="Rp. 100.000"
                buttonStyle={activeBtn === 2 ? style.nominals : style.nominal}
                titleStyle={
                  activeBtn === 2
                    ? { ...style.nominalText, color: 'black' }
                    : style.nominalText
                }
                onPress={() => setActiveBtn(2)}
              />
              <Button
                title="Rp. 500.000"
                buttonStyle={activeBtn === 3 ? style.nominals : style.nominal}
                titleStyle={
                  activeBtn === 3
                    ? { ...style.nominalText, color: 'black' }
                    : style.nominalText
                }
                onPress={() => setActiveBtn(3)}
              />
            </View>
            <View>
              <Text style={{ ...style.nominalText, marginTop: 20 }}>
                Or input nominal top up here
              </Text>
              <Input
                // disabled={activeBtn ? !activeInput : activeInput}
                placeholder="Minimal Rp. 10.000"
                inputContainerStyle={{ ...style.input }}
                inputStyle={style.inputText}
                onChange={() => setActiveInput(activeInput)}
              />
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            flex: 1,
            backgroundColor: '#f6f6f7',
            marginTop: 20,
            elevation: 7,
          }}>
          <Button title="Top Up" buttonStyle={style.topupbtn} />
        </View>
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
    borderBottomColor: '#f3f3f3',
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
  nominals: {
    marginTop: 10,
    marginHorizontal: 5,
    borderWidth: 3,
    borderRadius: 15,
    borderColor: '#53C9BE',
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
  topupbtn: {
    marginTop: 20,
    marginBottom: 60,
    width: '70%',
    borderRadius: 18,
    backgroundColor: '#53C9BE',
    elevation: 4,
    alignSelf: 'center',
  },
});
export default Topup;
