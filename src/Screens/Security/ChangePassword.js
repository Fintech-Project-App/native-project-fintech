import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import { Avatar, Input, Button } from 'react-native-elements';
import Icons from 'react-native-vector-icons/FontAwesome5';
import BGChange from '../../Helpers/Image/bgchange.png';
import key from '../../Helpers/Image/key.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CustomInputText from '../../Components/CustomInputText';
import CustomAlert from '../../Components/CustomAlert';

function ChangePassword(props) {
  const [hidePassword, setHidePassword] = React.useState(true);
  const dispatch = useDispatch();
  const FormLogin = useFormik({
    initialValues: { username: '', password: '' },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is Required'),
      password: Yup.string().required('Passowrd is Required'),
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
    },
  });

  return (
    <View style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
      <View style={style.container1}>
        <ImageBackground
          source={BGChange}
          style={{ width: '100%', height: '100%' }}>
          <TouchableOpacity
            style={{ width: 50, marginTop: 25 }}
            onPress={() => props.navigation.goBack()}>
            <Icons name="chevron-left" size={20} style={style.backIcon} />
          </TouchableOpacity>
        </ImageBackground>
        <View style={style.line} />
      </View>

      <View style={{ flex: 5 }}>
        <View>
          <Avatar
            rounded
            source={key}
            size={80}
            title=""
            containerStyle={style.avatar}
          />
          <ScrollView>
            <Input
              placeholder="Old Password"
              secureTextEntry={hidePassword ? true : false}
              inputContainerStyle={{ ...style.input }}
              inputStyle={style.inputText}
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
            />
            <Input
              placeholder="New Password"
              secureTextEntry={hidePassword ? true : false}
              inputContainerStyle={{ ...style.input }}
              inputStyle={style.inputText}
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
            />
            <Input
              placeholder="Confirm Password"
              secureTextEntry={hidePassword ? true : false}
              inputContainerStyle={{ ...style.input }}
              inputStyle={style.inputText}
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
            />
            <View style={style.changeContainer}>
              <Button title="Reset Password" buttonStyle={style.changebtn} />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container1: {
    flex: 2,
    flexDirection: 'row',
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111111',
    marginTop: -23,
    marginLeft: 80,
    marginBottom: 20,
  },
  backIcon: {
    color: '#2c2c2c',
    marginLeft: 15,
    width: 20,
  },
  line: {
    marginTop: 20,
    marginLeft: -200,
    marginRight: 50,
    borderBottomColor: '#e1e1e1',
    borderBottomWidth: 0,
    width: '87%',
    alignSelf: 'center',
  },
  avatar: {
    alignSelf: 'center',
    marginRight: 20,
    marginTop: -37,
    marginBottom: 20,
    borderWidth: 5,
    borderColor: '#f6f6f8',
    elevation: 4,
    backgroundColor: 'white',
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomWidth: 0,
    width: '80%',
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: '#eaeaea',
    paddingRight: 20,
  },
  inputText: {
    fontSize: 13,
    marginLeft: 20,
    color: '#525252',
  },
  changebtn: {
    marginTop: -10,
    marginBottom: 60,
    width: '75%',
    borderRadius: 10,
    backgroundColor: '#53C9BE',
    elevation: 4,
    alignSelf: 'center',
  },
  changeContainer: {
    marginTop: 30,
  },
});

export default ChangePassword;
