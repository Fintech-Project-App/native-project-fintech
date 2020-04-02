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
import Reset from '../../Helpers/Image/reset.png';
import OverlayImg from '../../Components/OverlayImg';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import CustomTextInput from '../../Components/CustomInputText';
import CustomAlert from '../../Components/CustomAlert';
import {submitData} from '../../Helpers/CRUD';

function ChangePassword(props) {
  const [hidePassword, setHidePassword] = React.useState(true);
  const [hideConfirmPass, setHideConfirmPass] = React.useState(true);
  const [isVisible, setHideVisible] = React.useState(false);
  const FormChangePassword = useFormik({
    initialValues: {code_verify: '', new_password: '', confirm_password: ''},
    validationSchema: Yup.object({
      code_verify: Yup.string()
        .length(6, 'Code Verify Only Have 6 Character')
        .required('Code Verify is Required'),
      new_password: Yup.string()
        .min(8, 'Password Must have More Than 8 Character')
        .required('New Password Is Required'),
      confirm_password: Yup.string()
        .oneOf([Yup.ref('new_password')], 'Confirm Password Not Match')
        .required('Confirm Password Is Required'),
    }),
    onSubmit: async (values, form) => {
      console.log(values);
      try {
        const response = await submitData(
          'change-password?code=' + values.code_verify,
          values,
        );
        console.log(response.data);
        if (response.data && response.data.success) {
          form.setSubmitting(false);
          form.resetForm();
          setHideVisible(true);
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
      {isVisible && (
        <OverlayImg
          message={'Success To Changes Password'}
          isVisible={isVisible}
          setHideVisible={setHideVisible}
          onPressOk={() => {
            props.navigation.navigate('Login');
          }}
        />
      )}
      <View style={{flex: 2, paddingBottom: 20}}>
        <TouchableOpacity
          style={{width: 50, marginTop: 25}}
          onPress={() => props.navigation.goBack()}>
          <Icons name="chevron-left" size={20} style={style.backIcon} />
        </TouchableOpacity>
      </View>
      <View style={style.viewForm}>
        <ScrollView>
          <Image rounded source={Reset} containerStyle={style.bgReset} />
          <View style={style.container}>
            <Text style={style.titleVerify}>Reset Password</Text>
            <Text style={{...style.quotes, marginTop: 5, marginBottom: 30}}>
              Complete this validation to reset your Password
            </Text>
          </View>
          <CustomTextInput
            form={FormChangePassword}
            name="code_verify"
            placeholder="Verification code"
            containerStyle={style.containerInput}
            inputContainerStyle={style.input}
            inputStyle={style.inputText}
            labelStyle={{marginHorizontal: 50}}
          />
          <CustomTextInput
            form={FormChangePassword}
            name="new_password"
            placeholder="New password"
            secureTextEntry={hidePassword ? true : false}
            rightIcon={
              <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                <Icons
                  name={hidePassword ? 'eye-slash' : 'eye'}
                  size={15}
                  color="grey"
                />
              </TouchableOpacity>
            }
            rightIconContainerStyle={{paddingRight: 20}}
            containerStyle={style.containerInput}
            inputContainerStyle={style.input}
            inputStyle={style.inputText}
            labelStyle={{marginHorizontal: 50}}
          />
          <CustomTextInput
            form={FormChangePassword}
            name="confirm_password"
            placeholder="Confirm password"
            secureTextEntry={hidePassword ? true : false}
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
            rightIconContainerStyle={{paddingRight: 20}}
            containerStyle={style.containerInput}
            inputContainerStyle={style.input}
            inputStyle={style.inputText}
            labelStyle={{marginHorizontal: 50}}
          />
          <View style={{alignSelf: 'center'}}>
            <Button
              title="Reset"
              disabled={!FormChangePassword.isValid}
              onPress={() => FormChangePassword.handleSubmit()}
              buttonStyle={style.verify}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  bgReset: {
    marginTop: 30,
    width: 150,
    height: 150,
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
  containerInput: {alignItems: 'center'},
  input: {
    marginTop: 10,
    borderRadius: 30,
    borderWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: '#f0efef',
    width: 260,
    height: 40,
    alignSelf: 'center',
    paddingLeft: 30,
  },
  inputText: {
    fontSize: 15,
    textAlign: 'left',
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
export default ChangePassword;
