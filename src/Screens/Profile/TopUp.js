import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import { Image, Button, Input } from 'react-native-elements';
import QCTopup from '../../Helpers/Image/QCTopup.png';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from '../../Redux/actions/userDataAction';
import formatRupiah from '../../Helpers/formatRupiah';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { submitData } from '../../Helpers/CRUD';
import OverlayImg from '../../Components/OverlayImg';
import CustomAlert from '../../Components/CustomAlert';
import CustomInputText from '../../Components/CustomInputText';

function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

function Topup(props) {
  const { dataProfile } = useSelector((state) => state.userData);
  const [activeBtn, setActiveBtn] = React.useState(0);
  const [isVisible, setHideVisible] = React.useState(false);
  const [throws, setThrows] = React.useState('');
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefreshing = React.useCallback(() => {
    setRefreshing(true);
    wait(200).then(() => {
      setRefreshing(false);
      setThrows(dispatch(updateProfile()));
    });
  }, [refreshing]);

  const dispatch = useDispatch();
  const FormTopUp = useFormik({
    enableReinitialize: true,
    initialValues: { nominal_topup: '' },
    validationSchema: Yup.object({
      nominal_topup: Yup.number()
        .min(10000, 'Nominal Topup Must be Greather than or equal 10.000')
        .required('Required Nominal'),
    }),
    onSubmit: async (values, form) => {
      try {
        const response = await submitData('topup', values);
        if (response.data && response.data.success) {
          dispatch(updateProfile());
          setActiveBtn(0);
          form.setSubmitting(false);
          form.resetForm();
          setHideVisible(true);
        } else {
          CustomAlert(response.data.success, response.data.msg);
        }
      } catch (err) {
        console.log(err);
        CustomAlert(err.response.data.success, err.response.data.msg);
      }
    },
  });
  const handleBtnNominalTopup = (value) => {
    setActiveBtn(value);
    FormTopUp.setFieldValue('nominal_topup', parseInt(value));
  };
  return (
    <View style={{ flex: 1, backgroundColor: '#fbfbfb' }}>
      {isVisible && (
        <OverlayImg
          message={`Topup Success For ${dataProfile.username}`}
          isVisible={isVisible}
          setHideVisible={setHideVisible}
        />
      )}
      <View style={{ flex: 6, paddingTop: 20 }}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefreshing} />
          }
        >
          <View style={{ paddingHorizontal: 25 }}>
            <Text style={style.title}>Top Up to</Text>
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
          </View>

          <View style={style.line} />

          <View style={{ paddingHorizontal: 25 }}>
            <Text style={style.title}>Choose Nominal Top Up</Text>
            <View style={{ flexDirection: 'row' }}>
              {[50000, 100000, 500000].map((v, i) => (
                <Button
                  key={i}
                  title={`Rp. ${formatRupiah(v)}`}
                  buttonStyle={
                    parseInt(activeBtn) === v ? style.nominals : style.nominal
                  }
                  titleStyle={
                    activeBtn === v
                      ? { ...style.nominalText, color: 'black' }
                      : style.nominalText
                  }
                  onPress={() => handleBtnNominalTopup(v)}
                />
              ))}
            </View>
            <View>
              <Text style={{ ...style.nominalText, marginTop: 20 }}>
                Or input nominal top up here
              </Text>
              <CustomInputText
                form={FormTopUp}
                name="nominal_topup"
                onChangeText={(value) => {
                  setActiveBtn(0);
                  FormTopUp.handleChange('nominal_topup')(value);
                }}
                placeholder="Minimal Rp. 10.000"
                inputContainerStyle={{ ...style.input }}
                keyboardType="numeric"
                inputStyle={style.inputText}
              />
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            flex: 1,
            backgroundColor: '#f6f6f7',
            marginTop: 20,
            elevation: 7,
          }}
        >
          <Button
            title="Top Up"
            buttonStyle={style.topupbtn}
            onPress={() => FormTopUp.handleSubmit()}
          />
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    borderWidth: 3,
    height: 70,
    borderColor: '#e5e4e4',
    borderRadius: 17,
    marginTop: 10,
    paddingLeft: 15,
    paddingVertical: 12,
  },
  line: {
    marginTop: 30,
    borderBottomColor: '#f3f3f3',
    borderBottomWidth: 7,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    color: '#646464',
    fontSize: 16,
  },
  nominal: {
    marginTop: 10,
    marginHorizontal: 5,
    borderWidth: 3,
    borderRadius: 15,
    borderColor: '#e5e4e4',
    backgroundColor: '#f6f6f8',
    width: 95,
    height: 37,
    alignItems: 'center',
    alignSelf: 'center',
  },
  nominals: {
    marginTop: 10,
    marginHorizontal: 5,
    borderWidth: 3,
    borderRadius: 15,
    borderColor: '#53C9BE',
    backgroundColor: '#f6f6f8',
    width: 95,
    height: 37,
    alignItems: 'center',
    alignSelf: 'center',
  },
  nominalText: {
    fontSize: 13,
    color: '#646464',
    fontWeight: '900',
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
  topupbtn: {
    marginTop: 20,
    marginBottom: 60,
    width: '70%',
    borderRadius: 18,
    backgroundColor: '#53C9BE',
    elevation: 4,
    alignSelf: 'center',
  },
});
export default Topup;
