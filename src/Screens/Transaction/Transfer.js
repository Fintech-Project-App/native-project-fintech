import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Vibration,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { Button, Input, Image, Avatar } from 'react-native-elements';
import QCTopup from '../../Helpers/Image/QCTopup.png';
import Icons from 'react-native-vector-icons/FontAwesome5';
import {
  updateProfile,
  historyTransaction,
} from '../../Redux/actions/userDataAction';
import { useSelector, useDispatch } from 'react-redux';
import { getData, submitData } from '../../Helpers/CRUD';
import { API_URL } from 'react-native-dotenv';
import { useFormik } from 'formik';
import formatRupiah from '../../Helpers/formatRupiah';
import * as Yup from 'yup';
import CustomInputText from '../../Components/CustomInputText';
import CustomAlert from '../../Components/CustomAlert';
import Loader from '../../Components/Loader';

function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
function Transfer(props) {
  console.log('alen')
  const { dataProfile } = useSelector((state) => state.userData);
  const [userReceiver, setUserReceiver] = React.useState('');
  const [refreshing, setRefreshing] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [dataUser, setDataUser] = React.useState(false)
  const dispatch = useDispatch();
  const onRefreshing = React.useCallback(() => {
    setRefreshing(true);
    wait(200).then(() => {
      setRefreshing(false);
      dispatch(updateProfile());
    });
  }, [refreshing]);
  const FormTransfer = useFormik({
    enableReinitialize: true,
    initialValues: {
      id_receiver: userReceiver.id || 0,
      message: '',
      amount: '',
    },
    validationSchema: Yup.object({
      message: Yup.string().nullable(),
      id_receiver: Yup.number().required(),
      amount: Yup.number()
        .max(dataProfile.balance || Infinity)
        .required(),
    }),
    onSubmit: async (values, form) => {
      try {
        setLoading(true);
        const response = await submitData('transfer', values);
        if (response.data && response.data.success) {
          setUserReceiver(false);
          setDataUser(false)
          form.resetForm();
          form.setSubmitting(false);
          dispatch(updateProfile());
          dispatch(historyTransaction());
          CustomAlert(response.data.success, response.data.msg);
        } else {
          CustomAlert(response.data.success, response.data.msg);
        }
      } catch (err) {
        if (err.response.data && err.response.data.msg) {
          CustomAlert(err.response.data.success, err.response.data.msg);
        } else {
          console.log(err);
        }
      }
      setLoading(false);
    },
  });
  const getUserReceiver = async (id) => {
    try {
      const response = await getData('users/' + id);
      if (response.data && response.data.success) {
        setUserReceiver(response.data.data);
      } else {
        console.log(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const getAllUser = async (value) => {
    try {
      if (value.length > 2) {
        const response = await getData('users?search=' + value);
        if (response.data && response.data.success) {
          setDataUser(response.data.data);
        } else {
          console.log(response.data);
        }
      } else {
        setDataUser(false);
      }
    } catch (err) {
      console.log(err)
    }
  }
  React.useEffect(() => {
    if (props.route.params && props.route.params.userId) {
      Vibration.vibrate(100);
      getUserReceiver(props.route.params.userId);
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {loading && <Loader loading={loading} setLoading={setLoading} />}
      <View style={{ flex: 8, marginBottom: 50 }}>
        <ScrollView
          nestedScrollEnabled={true}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefreshing} />
          }
        >
          <View style={{ paddingHorizontal: 25, marginTop: 30 }}>
            <Text style={style.betweenLabel}>Between Quick Cash User</Text>
            {userReceiver ? (
              <View
                style={{
                  alignSelf: 'center',
                  alignItems: 'center',
                  marginTop: 15,
                }}
              >
                <TouchableOpacity onPress={() => { setDataUser(false); setUserReceiver(false) }}>
                  <Icons name='times' size={20} color='red'></Icons>
                </TouchableOpacity>
                <Avatar
                  rounded
                  containerStyle={style.avatar}
                  title={
                    userReceiver.username &&
                    userReceiver.username.substring(0, 2)
                  }
                  source={
                    userReceiver.picture && {
                      uri: API_URL + userReceiver.picture,
                    }
                  }
                  size={80}
                />
                <View>
                  <Text style={style.receiver}>{userReceiver.username}</Text>
                </View>
              </View>
            ) : (
                <>
                  <Text style={{ fontSize: 13, color: '#7e7e7e', marginTop: 15 }}>
                    input the recipient's username
                  </Text>
                  <Input
                    placeholder="Username"
                    onChangeText={(value) => getAllUser(value)}
                    inputContainerStyle={{ ...style.input }}
                    inputStyle={style.inputText} />
                  {
                    dataUser && (
                      <ScrollView style={{ maxHeight: 100, paddingHorizontal: 15, borderRadius: 5 }} nestedScrollEnabled={true}>
                        <View style={{ backgroundColor: '#eee', position: 'relative', zIndex: 9 }}>
                          {dataUser.map((v) => (
                            <TouchableOpacity key={v.id} style={{ paddingVertical: 7, paddingHorizontal: 20, borderBottomStartRadius: 10, borderBottomEndRadius: 10 }} onPress={() => setUserReceiver(v)}>
                              <Text style={{ color: '#333', fontSize: 15 }}>{v.username}</Text>
                            </TouchableOpacity>
                          ))}
                        </View>
                      </ScrollView>
                    )
                  }
                </>
              )}
            <Text style={{ fontSize: 13, color: '#7e7e7e', marginTop: 15 }}>
              Message (optional)
            </Text>
            <CustomInputText
              form={FormTransfer}
              name="message"
              placeholder="Message"
              inputContainerStyle={{ ...style.input }}
              inputStyle={style.inputText}
            />
          </View>
          <View style={style.line} />
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
                  Saldo Rp. {formatRupiah(dataProfile.balance)}
                </Text>
              </View>
            </View>
          </View>

          <View style={style.banner}>
            <Text style={{ color: '#3a746b', fontWeight: 'bold' }}>
              Nominal Transfer
            </Text>
            <CustomInputText
              form={FormTransfer}
              name="amount"
              placeholder={`Rp. ${formatRupiah(dataProfile.balance)} ...`}
              keyboardType={'numeric'}
              inputContainerStyle={style.inputNominal}
              inputStyle={style.inputText}
            />
          </View>
        </ScrollView>
      </View>
      <View style={style.transferContainer}>
        <Button
          title="Transfer"
          buttonStyle={style.transferbtn}
          onPress={FormTransfer.handleSubmit}
        />
      </View>
    </View>
  );
}
export default Transfer;

const style = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
    marginTop: 25,
    marginLeft: 30,
    marginBottom: 0,
  },
  backIcon: {
    color: 'white',
    marginLeft: 15,
    width: 20,
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomWidth: 0,
    width: '100%',
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: '#eaeaea',
  },
  inputText: {
    fontSize: 13,
    marginLeft: 20,
    color: '#525252',
  },
  line: {
    marginTop: 30,
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 6,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  container: {
    borderWidth: 3,
    height: 70,
    borderColor: '#e5e4e4',
    borderRadius: 17,
    marginTop: 10,
    paddingLeft: 15,
    paddingVertical: 12,
    marginHorizontal: 35,
  },
  banner: {
    alignSelf: 'center',
    width: '80%',
    height: 80,
    backgroundColor: '#ceede9',
    borderRadius: 15,
    marginBottom: 50,
    padding: 15,
    paddingLeft: 30,
    marginTop: 12,
  },
  transferbtn: {
    marginTop: -10,
    marginBottom: 60,
    width: '70%',
    borderRadius: 18,
    backgroundColor: '#53C9BE',
    elevation: 4,
    alignSelf: 'center',
  },
  inputNominal: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    marginLeft: -68,
    marginTop: -5,
    height: 50,
    width: '100%',
    alignSelf: 'center',
  },
  betweenLabel: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#444444',
  },
  transferContainer: {
    flex: 1,
    backgroundColor: '#f6f6f7',
    marginTop: -0,
    elevation: 7,
  },
  avatar: {
    marginTop: 10,
    borderWidth: 4,
    borderColor: '#f1f1f1',
    elevation: 3,
  },
  receiver: {
    fontSize: 12,
    color: 'grey',
    marginTop: 7,
    marginBottom: 10,
    backgroundColor: '#d8d8d8',
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
});
