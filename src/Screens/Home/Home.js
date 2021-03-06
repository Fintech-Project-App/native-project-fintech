import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import { Image, Card, Icon } from 'react-native-elements';
import Logo from '../../Helpers/Image/QC.png';
import Navbar from '../../Helpers/Image/navbar.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Method from './Components/Method';
import data from './Components/Data';
import fiture from './Components/DataFiture';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../Redux/actions/userDataAction';
import formatRupiah from '../../Helpers/formatRupiah';

function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

function Home(props) {
  const dispatch = useDispatch();
  const { dataProfile } = useSelector((state) => state.userData);
  const [throws, setThrows] = React.useState('');
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefreshing = React.useCallback(() => {
    setRefreshing(true);
    wait(200).then(() => {
      setRefreshing(false);
      setThrows(dispatch(updateProfile()));
    });
  }, [refreshing]);

  return (
    <View style={{ flex: 1, backgroundColor: 'grey' }}>
      <View style={{ flex: 1 }}>
        <View
          style={{ flex: 1, flexDirection: 'row', backgroundColor: '#37b2a1' }}
        >
          <Image
            source={Logo}
            style={{ width: 50, height: 40 }}
            containerStyle={{ marginTop: 20, marginLeft: 20 }}
          />
          <TouchableOpacity style={{ marginLeft: 200 }}>
            <View style={style.icoNotif} />
            <Icon
              reverse
              name="ios-notifications"
              type="ionicon"
              color="transparent"
              size={30}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 7, backgroundColor: 'white' }}>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefreshing}
              />
            }
          >
            <ImageBackground
              source={Navbar}
              style={{ width: '100%', height: '47%' }}
            >
              <View style={{ paddingHorizontal: 20 }}>
                <View>
                  <Text style={style.title}>Quick Cash</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ ...style.cash, fontSize: 12 }}>Rp </Text>
                    <Text style={{ ...style.cash }}>
                      {formatRupiah(dataProfile.balance)}
                    </Text>
                  </View>
                </View>
                <View style={{ alignItem: 'center', marginTop: 5 }}>
                  <Card
                    style={style.cardMain}
                    containerStyle={style.cardContainer}
                  >
                    <View
                      style={{
                        flexDirection: 'row',
                        alignSelf: 'center',
                      }}
                    >
                      {data.map((val, i) => (
                        <TouchableOpacity
                          key={i}
                          style={{ marginHorizontal: 25 }}
                          onPress={() =>
                            props.navigation.navigate(val.navigate, val.params)
                          }
                        >
                          <View>
                            <Image
                              source={val.image}
                              style={style.iconTopup}
                              PlaceholderContent={<ActivityIndicator />}
                            />
                            <Text
                              style={{
                                color: '#3a746b',
                                fontSize: 11,
                              }}
                            >
                              {val.title}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      ))}
                    </View>
                  </Card>
                </View>

                <View style={style.banner}>
                  <Text style={{ color: '#3a746b', fontWeight: 'bold' }}>
                    Quick Cash Features
                  </Text>
                  <Text style={{ color: '#549389', fontSize: 12 }}>
                    To get more payment methods
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                  }}
                >
                  {fiture.map((val, i) => (
                    <TouchableOpacity
                      key={i}
                      style={{ marginHorizontal: 18 }}
                      PlaceholderContent={<ActivityIndicator />}
                      onPress={() => props.navigation.navigate(val.navigate)}
                    >
                      <View>
                        <Image
                          source={val.image}
                          style={{
                            width: 40,
                            height: 40,
                          }}
                        />
                        <Text style={style.featureTitle}>{val.title}</Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
              <View style={style.line} />
              <View style={{ paddingHorizontal: 30 }}>
                <Text style={style.methodTitle}>
                  Get to know Quick Cash more closely
                </Text>
              </View>
            </ImageBackground>
            <View style={style.methodCard}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Method />
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  title: {
    fontWeight: '700',
    fontSize: 15,
    color: 'white',
  },
  cash: {
    fontWeight: '700',
    fontSize: 23,
    color: 'white',
    marginTop: 5,
  },
  cardMain: {
    width: '100%',
    backgroundColor: 'black',
    height: 200,
    marginTop: 30,
    alignSelf: 'center',
    elevation: 4,
  },
  cardContainer: {
    borderRadius: 10,
    elevation: 3,
    marginBottom: 20,
    paddingRight: 15,
  },
  saldo: {
    fontWeight: '700',
    fontSize: 20,
    color: 'white',
    marginTop: 5,
    fontSize: 13,
    fontWeight: 'bold',
    color: 'orange',
    paddingLeft: 6,
  },
  line: {
    marginTop: 30,
    borderBottomColor: '#f3f3f3',
    borderBottomWidth: 7,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  banner: {
    alignSelf: 'center',
    width: '90%',
    height: 60,
    backgroundColor: '#e6f9f6',
    borderRadius: 20,
    marginBottom: 20,
    padding: 10,
    paddingLeft: 30,
  },
  methodCard: {
    height: 150,
    marginTop: 50,
    marginBottom: 30,
    flex: 1,
    paddingHorizontal: 20,
  },
  methodTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#5d5d5d',
  },
  featureTitle: {
    marginTop: 8,
    color: '#3d3d3d',
    fontSize: 12,
    textAlign: 'center',
  },
  iconTopup: {
    width: 33,
    height: 33,
    borderRadius: 7,
  },
  backIcon: {
    color: 'white',
    marginLeft: 15,
    width: 20,
  },
  icoNotif: {
    borderRadius: 100,
    width: 8,
    height: 8,
    backgroundColor: 'red',
    position: 'absolute',
    marginTop: 27,
    marginRight: 25,
    right: 0,
  },
});
export default Home;
