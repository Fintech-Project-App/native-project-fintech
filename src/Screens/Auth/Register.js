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
import {Button, Input, CheckBox} from 'react-native-elements';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import CustomInputText from '../../Components/CustomInputText';
import {submitData} from '../../Helpers/CRUD';
import CustomAlert from '../../Components/CustomAlert';
function Register(props) {
  const [hidePassword, setHidePassword] = React.useState(true);
  const [hideConfirmPass, setHideConfirmPass] = React.useState(true);
  const FormRegister = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirm_passoword: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(6, 'Username Must have More Than 6 character')
        .required('Username Is Required'),
      email: Yup.string()
        .email('Enter Valid Valid Email')
        .required('Email is Required'),
      password: Yup.string()
        .min(8, 'Password Must have More Than 8 Character')
        .required('Passoword Is Required'),
      confirm_password: Yup.string()
        .oneOf([Yup.ref('password')], 'Password Not Match')
        .required('Confirm Password is Required'),
    }),
    onSubmit: async (values, form) => {
      console.log(values);
      try {
        const response = await submitData('register', values);
        console.log(response.data);
        if (response.data && response.data.success) {
          form.setSubmitting(false);
          form.resetForm();
          CustomAlert(response.data.success, response.data.msg, () =>
            props.navigation.navigate('Verify', {email: values.email}),
          );
        } else {
          CustomAlert(response.data.success, response.data.msg);
        }
      } catch (err) {
        CustomAlert(err.response.data.success, err.response.data.msg);
      }
    },
  });
  return (
    <View style={{flex: 1, backgroundColor: '#f1edee'}}>
      <View style={{flex: 1, paddingBottom: 30}}>
        <TouchableOpacity
          style={{width: 50, marginTop: 25}}
          onPress={() => props.navigation.goBack()}>
          <Icons name="chevron-left" size={20} style={style.backIcon} />
        </TouchableOpacity>
        <View style={style.container}>
          <Text style={style.titleLogin}>Sign up</Text>
        </View>
      </View>
      <View style={style.viewForm}>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: -60,
            }}
          />
          <View>
            <Form
              style={{
                paddingLeft: 50,
                paddingRight: 50,
                marginTop: 60,
                marginBottom: 70,
              }}>
              <CustomInputText
                placeholder="Your username ..."
                form={FormRegister}
                name="username"
                containerStyle={style.containerInput}
                inputContainerStyle={style.input}
                inputStyle={style.inputText}
              />
              <CustomInputText
                placeholder="Email ..."
                form={FormRegister}
                name="email"
                containerStyle={style.containerInput}
                inputContainerStyle={style.input}
                inputStyle={style.inputText}
              />
              <CustomInputText
                placeholder="Password ..."
                secureTextEntry={hidePassword ? true : false}
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
                form={FormRegister}
                name="password"
                rightIconContainerStyle={{paddingRight: 20}}
                containerStyle={style.containerInput}
                inputContainerStyle={style.input}
                inputStyle={style.inputText}
              />
              <CustomInputText
                placeholder="Confirm password ..."
                secureTextEntry={hideConfirmPass ? true : false}
                rightIcon={
                  <TouchableOpacity
                    onPress={() => setHideConfirmPass(!hideConfirmPass)}>
                    <Icons
                      name={hideConfirmPass ? 'eye-slash' : 'eye'}
                      size={15}
                      color="grey"
                    />
                  </TouchableOpacity>
                }
                form={FormRegister}
                name="confirm_password"
                rightIconContainerStyle={{paddingRight: 20}}
                containerStyle={style.containerInput}
                inputContainerStyle={style.input}
                inputStyle={style.inputText}
              />
              <View>
                <Button
                  title="Sign up"
                  buttonStyle={style.signup}
                  disabled={!FormRegister.isValid}
                  onPress={() => FormRegister.handleSubmit()}
                />
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={style.quotes}>
                  If signing up, you agreed with your terms of services and
                  privacy policy
                </Text>
              </View>

              <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                <Text
                  style={{...style.quotes, marginTop: 70, marginBottom: -60}}>
                  Already have account ?
                </Text>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Login')}
                  style={{marginTop: 45, marginBottom: -60}}>
                  <Text style={style.alreadySign}>Log in</Text>
                </TouchableOpacity>
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
    flex: 10,
    paddingTop: 40,
    marginTop: 50,
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
  signup: {
    marginTop: 20,
    width: '100%',
    borderRadius: 18,
    backgroundColor: '#53C9BE',
    elevation: 4,
  },
  textButton: {
    fontSize: 14,
    marginLeft: 15,
  },
  containerInput: {
    marginBottom: 15,
  },
  input: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomWidth: 0,
    width: 280,
    alignSelf: 'center',
    backgroundColor: '#F5F5F5',
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
    fontSize: 13,
    color: '#717070',
  },
  alreadySign: {
    marginTop: 25,
    fontSize: 13,
    paddingLeft: 10,
    color: '#53C9BE',
    fontWeight: 'bold',
  },
});
export default Register;
