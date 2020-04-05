import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Picker,
} from 'react-native';
import { Avatar, Icon, Input, Button } from 'react-native-elements';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CustomTextInput from '../../Components/CustomInputText';
import CustomAlert from '../../Components/CustomAlert';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from '../../Redux/actions/userDataAction';
import { patchData } from '../../Helpers/CRUD';
import ImagePicker from 'react-native-image-picker';
import { API_URL } from 'react-native-dotenv';
import Loader from '../../Components/Loader';

function ProfileUpdate(props) {
  const [srcImageUpdate, setSrcImageUpdate] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const { dataProfile } = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const FormUpdateUser = useFormik({
    enableReinitialize: true,
    initialValues: { ...dataProfile } || {},
    validationSchema: Yup.object({
      fullname: Yup.string().nullable(),
      email: Yup.string().email().nullable(),
      gender: Yup.string().oneOf(['male', 'female', 'others']).nullable(),
      address: Yup.string().nullable(),
      picture: Yup.mixed().nullable(),
    }),
    onSubmit: async (values, form) => {
      setLoading(true);
      try {
        const formData = new FormData();
        const fillAble = ['fullname', 'email', 'gender', 'address', 'picture'];
        fillAble
          .filter(
            (keyUpdate) =>
              values[keyUpdate] && values[keyUpdate] !== dataProfile[keyUpdate]
          )
          .forEach((keyUpdate) => {
            if (keyUpdate !== 'picture') {
              formData.append(keyUpdate, values[keyUpdate]);
            } else {
              console.log('alen');
              formData.append('picture', {
                name: values.picture.fileName,
                type: values.picture.type,
                uri:
                  Platform.OS === 'android'
                    ? values.picture.uri
                    : values.picture.uri.replace('file://', ''),
              });
            }
          });
        const response = await patchData('profile', formData);
        if (response.data && response.data.success) {
          await dispatch(updateProfile());
          CustomAlert(response.data.success, response.data.msg);
        } else {
          CustomAlert(response.data.success, response.data.msg);
        }
      } catch (err) {
        console.log(err);
        if (!(err.message === 'Network Error')) {
          if (err.response) {
            CustomAlert(err.response.data.success, err.response.data.msg);
          }
        }
      }
      setLoading(false);
    },
  });
  const handleChangePicture = () => {
    const options = {
      noData: true,
      quality: 0.6,
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.uri) {
        console.log(response);
        setSrcImageUpdate(response.uri);
        FormUpdateUser.setFieldValue('picture', response);
      }
    });
  };
  return (
    <View style={{ flex: 1 }}>
      {loading && <Loader loading={loading} setLoading={setLoading} />}
      <View
        style={{
          flex: 1,
          backgroundColor: '#53C9BE',
          flexDirection: 'row',
          marginBottom: -150,
        }}
      >
        <TouchableOpacity
          style={{ width: 50, marginTop: 25 }}
          onPress={() => props.navigation.goBack()}
        >
          <Icons name="chevron-left" size={20} style={style.backIcon} />
        </TouchableOpacity>
        <Text style={style.title}>Change Profile</Text>
      </View>

      <View
        style={{
          flex: 2,
          backgroundColor: '#53C9BE',
          alignItems: 'center',
          marginTop: 110,
          marginBottom: 40,
        }}
      >
        <Avatar
          rounded
          source={
            (srcImageUpdate || dataProfile.picture) && {
              uri: srcImageUpdate || API_URL + dataProfile.picture,
            }
          }
          size={130}
          title={dataProfile && dataProfile.username.substring(0, 2)}
          containerStyle={style.avatar}
        />
        <TouchableOpacity
          style={{ marginTop: -50, marginLeft: 80 }}
          onPress={handleChangePicture}
        >
          <Icon
            reverse
            name="ios-camera"
            type="ionicon"
            color="grey"
            size={15}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 4, marginTop: 20 }}>
        <ScrollView>
          <CustomTextInput
            form={FormUpdateUser}
            name="fullname"
            placeholder="Fullname"
            inputContainerStyle={{ ...style.input }}
            inputStyle={style.inputText}
          />
          <CustomTextInput
            form={FormUpdateUser}
            name="email"
            placeholder="Email"
            inputContainerStyle={{ ...style.input }}
            inputStyle={style.inputText}
          />
          <View style={style.picker}>
            <Picker
              style={{
                textAlign: 'center',
                color: 'grey',
                marginLeft: 100,
                width: 100,
              }}
              selectedValue={FormUpdateUser.values.gender || 'others'}
              onValueChange={FormUpdateUser.handleChange('gender')}
            >
              {[
                { label: 'Male', value: 'male' },
                { label: 'Female', value: 'female' },
                { label: 'Others', value: 'others' },
              ].map((option) => (
                <Picker.Item
                  label={option.label}
                  value={option.value}
                  key={option.value}
                />
              ))}
            </Picker>
          </View>
          <CustomTextInput
            form={FormUpdateUser}
            name="address"
            placeholder="Address"
            inputContainerStyle={{ ...style.input }}
            inputStyle={style.inputText}
          />
          <View>
            <Button
              title="Edit"
              buttonStyle={style.update}
              onPress={() => FormUpdateUser.handleSubmit()}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
    marginTop: 25,
    marginLeft: 30,
    marginBottom: 20,
  },
  backIcon: {
    color: 'white',
    marginLeft: 15,
    width: 20,
  },
  avatar: {
    marginTop: 20,
    borderWidth: 5,
    borderColor: '#f6f6f8',
  },
  name: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 10,
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
    textAlign: 'center',
  },
  picker: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#eaeaea',
    borderWidth: 0,
    borderColor: '#cfcfcf',
    borderRadius: 10,
    width: '75%',
    height: 50,
    alignSelf: 'center',
  },
  inputForm: {
    color: 'grey',
    fontSize: 15,
  },
  form: {
    marginTop: 60,
    paddingHorizontal: 30,
    paddingRight: 40,
  },
  update: {
    marginTop: 20,
    marginBottom: 60,
    width: '75%',
    borderRadius: 10,
    backgroundColor: '#53C9BE',
    elevation: 4,
    alignSelf: 'center',
  },
});

export default ProfileUpdate;
