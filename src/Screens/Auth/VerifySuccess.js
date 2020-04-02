import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { Form } from 'native-base';
import { Button, Input, Image } from 'react-native-elements';
import Success from '../../Helpers/Image/success.png';

function VerifySuccess(props) {
  const [hidePassword, setHidePassword] = React.useState(true);
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 2, paddingBottom: 20 }}>
        <TouchableOpacity
          style={{ width: 50, marginTop: 25 }}
          onPress={() => props.navigation.goBack()}>
          <Icons name="chevron-left" size={20} style={style.backIcon} />
        </TouchableOpacity>
      </View>
      <View style={style.viewForm}>
        <Image
          rounded
          source={Success}
          containerStyle={{
            marginTop: 30,
            width: 170,
            height: 170,
            alignSelf: 'center',
          }}
        />
        <View style={style.container}>
          <Text style={style.titleSuccess}>Account was created</Text>
          <Text style={{ ...style.quotes, marginTop: 5 }}>
            You have successfully registered, please click the confirmation
            button to login
          </Text>
        </View>
        <View style={{ alignSelf: 'center' }}>
          <Button
            title="Confirm"
            onPress={() => props.navigation.navigate('Login')}
            buttonStyle={style.confirm}
          />
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    marginTop: 10,
  },
  titleSuccess: {
    textAlign: 'center',
    fontSize: 21,
    fontWeight: '700',
    color: '#6f6f6f',
    marginTop: 15,
  },
  backIcon: {
    color: '#4f4f4f',
    marginLeft: 15,
    width: 20,
  },
  viewForm: {
    flex: 9,
    marginBottom: 10,
    marginTop: -150,
    paddingTop: 50,
    justifyContent: 'center',
  },
  confirm: {
    marginTop: 20,
    marginBottom: 200,
    width: 260,
    borderRadius: 18,
    backgroundColor: '#53C9BE',
    elevation: 4,
  },
  textButton: {
    fontSize: 14,
    marginLeft: 15,
  },
  quotes: {
    textAlign: 'center',
    marginTop: 25,
    paddingHorizontal: 30,
    fontSize: 12,
    color: '#979797',
  },
});
export default VerifySuccess;
