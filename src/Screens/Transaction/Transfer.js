import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Icon,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import QCTopup from '../../Helpers/Image/QCTopup.png';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { updateProfile } from '../../Redux/actions/userDataAction';
import { useSelector, useDispatch } from 'react-redux';

function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

function Transfer(props) {
  const [reset, setReset] = React.useState('');
  const [throws, setThrows] = React.useState('');
  const [refreshing, setRefreshing] = React.useState(false);
  const dispatch = useDispatch();

  const onRefreshing = React.useCallback(() => {
    setRefreshing(true);
    wait(200).then(() => {
      setRefreshing(false);
      setThrows(dispatch(updateProfile()));
    });
  }, [refreshing]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 8, marginBottom: 50 }}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefreshing} />
          }
        >
          <View style={{ paddingHorizontal: 25, marginTop: 30 }}>
            <Text style={style.betweenLabel}>Between Quick Cash User</Text>
            <Text style={{ fontSize: 13, color: '#7e7e7e', marginTop: 15 }}>
              input the recipient's username
            </Text>
            <Input
              placeholder="Username"
              inputContainerStyle={{ ...style.input }}
              inputStyle={style.inputText}
              rightIcon={
                <TouchableOpacity>
                  <Icons
                    name="times"
                    size={15}
                    color="grey"
                    style={{ marginRight: 20 }}
                    onPress={() => setReset(reset)}
                  />
                </TouchableOpacity>
              }
            />
            <Text style={{ fontSize: 13, color: '#7e7e7e', marginTop: 15 }}>
              Message (optional)
            </Text>
            <Input
              placeholder="Message"
              inputContainerStyle={{ ...style.input }}
              inputStyle={style.inputText}
              rightIcon={
                <TouchableOpacity>
                  <Icons
                    name="times"
                    size={15}
                    color="grey"
                    style={{ marginRight: 20 }}
                    onPress={() => setReset(reset)}
                  />
                </TouchableOpacity>
              }
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
                  Saldo Rp. 1000
                </Text>
              </View>
            </View>
          </View>

          <View style={style.banner}>
            <Text style={{ color: '#3a746b', fontWeight: 'bold' }}>
              Nominal Transfer
            </Text>
            <Input
              placeholder="Rp. 10.000 ..."
              keyboardType={'numeric'}
              inputContainerStyle={style.inputNominal}
              inputStyle={style.inputText}
            />
          </View>
        </ScrollView>
      </View>
      <View style={style.transferContainer}>
        <Button title="Transfer" buttonStyle={style.transferbtn} />
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
});
