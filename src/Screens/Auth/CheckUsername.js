import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome5';
import {Button, Input, Image} from 'react-native-elements';
import Forgot from '../../Helpers/Image/forgot.png';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import CustomTextInput from '../../Components/CustomInputText';
import CustomAlert from '../../Components/CustomAlert';
import {submitData} from '../../Helpers/CRUD';
function ForgotPassword(props) {
  const FormCheckUsername = useFormik({
    initialValues: {username: ''},
    validationSchema: Yup.object({
      username: Yup.string().required('Enter Username To Reset Your Password'),
    }),
    onSubmit: async (values, form) => {
      console.log(values);
      try {
        const response = await submitData('forgot-password', values);
        if (response.data && response.data.success) {
          form.setSubmitting(false);
          form.resetForm();
          CustomAlert(response.data.success, response.data.msg, () =>
            props.navigation.navigate('ChangePassword'),
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
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 2, paddingBottom: 20}}>
        <TouchableOpacity
          style={{width: 50, marginTop: 25}}
          onPress={() => props.navigation.goBack()}>
          <Icons name="chevron-left" size={20} style={style.backIcon} />
        </TouchableOpacity>
      </View>
      <View style={style.viewForm}>
        <ScrollView>
          <Image rounded source={Forgot} containerStyle={style.bgVerify} />
          <View style={style.container}>
            <Text style={style.titleVerify}>Forgot Password</Text>
            <Text style={{...style.quotes, marginTop: 5}}>
              Enter your username if it is available before resetting your
              password
            </Text>
          </View>
          <CustomTextInput
            form={FormCheckUsername}
            name="username"
            placeholder="Your username"
            containerStyle={{alignItems: 'center'}}
            inputContainerStyle={style.input}
            inputStyle={style.inputText}
            labelStyle={{marginHorizontal: 50}}
          />
          <View style={{alignSelf: 'center'}}>
            <Button
              title="Check"
              disabled={!FormCheckUsername.isValid}
              onPress={() => FormCheckUsername.handleSubmit()}
              buttonStyle={style.verify}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  bgVerify: {
    marginTop: 30,
    width: 170,
    height: 170,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
    marginTop: 10,
  },
  titleVerify: {
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
  verify: {
    marginTop: 20,
    marginBottom: 20,
    width: 260,
    borderRadius: 18,
    backgroundColor: '#53C9BE',
    elevation: 4,
  },
  textButton: {
    fontSize: 14,
    marginLeft: 15,
  },
  input: {
    marginTop: 30,
    borderRadius: 30,
    borderWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: '#f0efef',
    width: 260,
    height: 40,
    alignSelf: 'center',
    paddingLeft: 0,
  },
  inputText: {
    fontSize: 15,
    textAlign: 'center',
    color: '#525252',
  },
  quotes: {
    textAlign: 'center',
    marginTop: 25,
    paddingHorizontal: 30,
    fontSize: 12,
    color: '#979797',
  },
});
export default ForgotPassword;
