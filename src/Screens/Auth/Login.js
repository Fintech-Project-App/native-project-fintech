import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome5';
import {Item, Form, Label, Thumbnail} from 'native-base';
import {Button, Input, Avatar, Image} from 'react-native-elements';
import BGLogin from '../../Helpers/Image/bgLogin.jpg';
import Logo from '../../Helpers/Image/QC.png';

function Login(props) {
  return (
    <View style={{flex: 1, backgroundColor: '#f1edee'}}>
      <View style={{flex: 2, paddingBottom: 20}}>
        <TouchableOpacity
          style={{width: 50, marginTop: 25}}
          onPress={() => props.navigation.goBack()}>
          <Icons name="chevron-left" size={20} style={style.backIcon} />
        </TouchableOpacity>
        <View style={style.container}>
          <Text style={style.titleLogin}>Log in</Text>
        </View>
      </View>
      <View style={style.viewForm}>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: -60,
            }}>
            <Button
              title="Facebook"
              buttonStyle={style.anotherLogin}
              titleStyle={style.textButton}
            />
            <Button
              title="Google+"
              buttonStyle={{...style.anotherLogin, backgroundColor: '#c63027'}}
              titleStyle={style.textButton}
            />
          </View>
          <View>
            <Text style={style.quotes}> or login with your username</Text>
          </View>
          <View>
            <Form
              style={{
                paddingLeft: 50,
                paddingRight: 50,
                marginTop: 30,
                marginBottom: 50,
              }}>
              <Input
                placeholder="Your username ..."
                inputContainerStyle={style.input}
                inputStyle={style.inputText}
              />
              <Input
                secureTextEntry
                placeholder="Password ..."
                inputContainerStyle={style.input}
                inputStyle={style.inputText}
              />
              <TouchableOpacity>
                <Text
                  style={{...style.quotes, marginTop: 2, textAlign: 'right'}}>
                  Forgot your password
                </Text>
              </TouchableOpacity>

              <View>
                <Button title="Log in" buttonStyle={style.login} />
              </View>
            </Form>
          </View>
        </ScrollView>
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
  titleLogin: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4f4f4f',
    marginTop: 15,
  },
  backIcon: {
    color: '#4f4f4f',
    marginLeft: 15,
    width: 20,
  },
  viewForm: {
    flex: 9,
    paddingTop: 50,
    justifyContent: 'center',
  },
  anotherLogin: {
    marginTop: 60,
    width: 150,
    height: 45,
    borderRadius: 18,
    backgroundColor: '#41568d',
    elevation: 4,
    marginHorizontal: 10,
  },
  login: {
    marginTop: 50,
    width: '100%',
    borderRadius: 18,
    backgroundColor: '#53C9BE',
    elevation: 4,
  },
  textButton: {
    fontSize: 14,
  },
  input: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomWidth: 0,
    width: 280,
    alignSelf: 'center',
    backgroundColor: '#F5F5F5',
    marginBottom: 15,
    paddingLeft: 10,
  },
  inputText: {
    fontSize: 15,
    paddingLeft: 20,
  },
  quotes: {
    textAlign: 'center',
    marginTop: 25,
    fontSize: 14,
    color: '#4f4f4f',
  },
});
export default Login;
