import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome5';
import {Form} from 'native-base';
import {Button, Input, Overlay} from 'react-native-elements';
import Overlays from '../../Components/Overlay';

function Login(props) {
  const [hidePassword, setHidePassword] = React.useState(true);
  const [isVisible, setHideVisible] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async () => {
    if (username === '' || password === '') {
      setHideVisible(true);
    } else {
      props.navigation.navigate('Home');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#f1edee'}}>
      {isVisible && (
        <Overlays
          message={'Text still empty'}
          isVisible={isVisible}
          setHideVisible={setHideVisible}
        />
      )}
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
              icon={<Icons name="facebook-f" size={15} color="white" />}
              buttonStyle={style.anotherLogin}
              titleStyle={style.textButton}
            />
            <Button
              title="Google+"
              icon={<Icons name="google-plus-g" size={15} color="white" />}
              buttonStyle={{...style.anotherLogin, backgroundColor: '#c63027'}}
              titleStyle={style.textButton}
            />
          </View>
          <View>
            <Text style={style.quotes}> or log in with your username</Text>
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
                onChangeText={username => setUsername({username})}
                value={username}
              />
              <Input
                secureTextEntry={hidePassword ? true : false}
                onChangeText={password => setPassword({password})}
                value={password}
                rightIcon={
                  <TouchableOpacity
                    onPress={() => setHidePassword(!hidePassword)}>
                    <Icons
                      name={hidePassword ? 'eye-slash' : 'eye'}
                      size={15}
                      color="grey"
                    />
                  </TouchableOpacity>
                }
                rightIconContainerStyle={{paddingRight: 20}}
                placeholder="Password ..."
                inputContainerStyle={style.input}
                inputStyle={style.inputText}
              />
              <TouchableOpacity
                onPress={() => props.navigation.navigate('CheckUsername')}>
                <Text
                  style={{...style.quotes, marginTop: 2, textAlign: 'right'}}>
                  Forgot your password
                </Text>
              </TouchableOpacity>

              <View>
                <Button
                  title="Log in"
                  buttonStyle={style.login}
                  onPress={handleLogin}
                />
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
    marginLeft: 15,
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
    color: '#525252',
  },
  quotes: {
    textAlign: 'center',
    marginTop: 25,
    fontSize: 14,
    color: '#4f4f4f',
  },
});
export default Login;
