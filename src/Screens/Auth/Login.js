import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { Form } from 'native-base';
import { Button, Input, Overlay } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../Redux/actions/userDataAction';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CustomInputText from '../../Components/CustomInputText';
import CustomAlert from '../../Components/CustomAlert';
function Login(props) {
  const [hidePassword, setHidePassword] = React.useState(true);
  const dispatch = useDispatch();
  const FormLogin = useFormik({
    initialValues: { username: '', password: '' },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is Required'),
      password: Yup.string().required('Passowrd is Required')
    }),
    onSubmit: async (values, form) => {
      try {
        const response = await dispatch(userLogin(values));
        if (response.data && !response.data.success) {
          CustomAlert(response.data.success, response.data.msg);
        }
      } catch (err) {
        CustomAlert(err.response.data.success, err.response.data.msg);
      }
    }
  });

  return (
    <View style={{ flex: 1, backgroundColor: '#f1edee' }}>
      <View style={{ flex: 2, paddingBottom: 20 }}>
        <TouchableOpacity
          style={{ width: 50, marginTop: 25 }}
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
              marginTop: -60
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
              buttonStyle={{
                ...style.anotherLogin,
                backgroundColor: '#c63027'
              }}
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
                marginBottom: 50
              }}>
              <CustomInputText
                form={FormLogin}
                name="username"
                placeholder="Your username ..."
                containerStyle={style.inputContainer}
                inputContainerStyle={style.input}
                inputStyle={style.inputText}
              />
              <CustomInputText
                secureTextEntry={hidePassword ? true : false}
                form={FormLogin}
                name="password"
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
                rightIconContainerStyle={{ paddingRight: 20 }}
                placeholder="Password ..."
                containerStyle={style.inputContainer}
                inputContainerStyle={style.input}
                inputStyle={style.inputText}
              />
              <TouchableOpacity
                onPress={() => props.navigation.navigate('CheckUsername')}>
                <Text
                  style={{ ...style.quotes, marginTop: 2, textAlign: 'right' }}>
                  Forgot your password
                </Text>
              </TouchableOpacity>

              <View>
                <Button
                  title="Log in"
                  buttonStyle={style.login}
                  onPress={FormLogin.handleSubmit}
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
    marginTop: 10
  },
  titleLogin: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4f4f4f',
    marginTop: 15
  },
  backIcon: {
    color: '#4f4f4f',
    marginLeft: 15,
    width: 20
  },
  viewForm: {
    flex: 9,
    paddingTop: 50,
    justifyContent: 'center'
  },
  anotherLogin: {
    marginTop: 60,
    width: 150,
    height: 45,
    borderRadius: 18,
    backgroundColor: '#41568d',
    elevation: 4,
    marginHorizontal: 10
  },
  login: {
    marginTop: 50,
    width: '100%',
    borderRadius: 18,
    backgroundColor: '#53C9BE',
    elevation: 4
  },
  textButton: {
    fontSize: 14,
    marginLeft: 15
  },
  inputContainer: {
    marginBottom: 15
  },
  input: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomWidth: 0,
    width: 280,
    alignSelf: 'center',
    backgroundColor: '#F5F5F5',
    paddingLeft: 10
  },
  inputText: {
    fontSize: 15,
    paddingLeft: 20,
    color: '#525252'
  },
  quotes: {
    textAlign: 'center',
    marginTop: 25,
    fontSize: 14,
    color: '#4f4f4f'
  }
});
export default Login;
