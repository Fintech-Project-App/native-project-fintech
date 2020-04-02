import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet,
  FlatList
} from 'react-native';
import { Image, Card } from 'react-native-elements';
import Logo from '../../Helpers/Image/QC.png';
import Navbar from '../../Helpers/Image/navbar.png';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Method from './Components/Method';
import Topup from '../../Helpers/Image/topup.png';
import History from '../../Helpers/Image/history.png';
import TF from '../../Helpers/Image/trans.png';
import PLN from '../../Helpers/Image/PLN.png';
import Pulsa from '../../Helpers/Image/pulsa.png';
import Data from '../../Helpers/Image/data.png';
import BPJS from '../../Helpers/Image/BPJS.png';
import Success from '../../Helpers/Image/success.png';
import Pay from '../../Helpers/Image/pay.png';

function Home(props) {
  const data = [
    {
      image: Topup,
      title: 'Top Up',
      navigate: 'TopupNavigate'
    },
    {
      image: TF,
      title: 'Transfer',
      navigate: 'TopupNavigate'
    },
    {
      image: History,
      title: 'History',
      navigate: 'Method'
    }
  ];
  const fiture = [
    {
      image: PLN,
      title: 'PLN',
      navigate: 'TopupNavigate'
    },
    {
      image: Pulsa,
      title: 'Pulsa',
      navigate: 'TopupNavigate'
    },
    {
      image: Data,
      title: 'Data',
      navigate: 'TopupNavigate'
    },
    {
      image: BPJS,
      title: 'BPJS',
      navigate: 'TopupNavigate'
    }
  ];
  const methode = [{ image: Success }, { image: Pay }];

  return (
    <View style={{ flex: 1, backgroundColor: 'grey' }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: '#37b2a1' }}>
          <Image
            source={Logo}
            style={{ width: 50, height: 40 }}
            containerStyle={{ marginTop: 20, marginLeft: 20 }}
          />
        </View>
        <View style={{ flex: 7, backgroundColor: 'white' }}>
          <ScrollView>
            <ImageBackground
              source={Navbar}
              style={{ width: '100%', height: '47%' }}>
              <View style={{ paddingHorizontal: 20 }}>
                <View>
                  <Text style={style.title}>Quick Cash</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ ...style.cash, fontSize: 12 }}>Rp </Text>
                    <Text style={{ ...style.cash }}>1000</Text>
                  </View>
                </View>
                <View style={{ alignItem: 'center', marginTop: 5 }}>
                  <Card
                    style={style.cardMain}
                    containerStyle={style.cardContainer}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignSelf: 'center'
                      }}>
                      {data.map(val => (
                        <TouchableOpacity
                          style={{ marginHorizontal: 25 }}
                          onPress={() =>
                            props.navigation.navigate(val.navigate)
                          }>
                          <View>
                            <Image
                              source={val.image}
                              style={{
                                width: 33,
                                height: 33,
                                marginLeft: -20
                              }}
                            />
                            <Text
                              style={{
                                color: '#3a746b',
                                fontSize: 11
                              }}>
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
                    alignSelf: 'center'
                  }}>
                  {fiture.map(val => (
                    <TouchableOpacity
                      style={{ marginHorizontal: 18 }}
                      onPress={() => props.navigation.navigate(val.navigate)}>
                      <View>
                        <Image
                          source={val.image}
                          style={{
                            width: 40,
                            height: 40
                          }}
                        />
                        <Text
                          style={{
                            marginTop: 8,
                            color: '#3d3d3d',
                            fontSize: 12,
                            textAlign: 'center'
                          }}>
                          {val.title}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
              <View style={style.line} />
              <View style={{ paddingHorizontal: 30 }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: '#363636'
                  }}>
                  How to use Quick Cash
                </Text>
              </View>
            </ImageBackground>
            <View
              style={{
                height: 150,
                marginTop: 50,
                marginBottom: 30,
                flex: 1,
                paddingHorizontal: 20
              }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {methode.map((val, idx) => {
                  return <Method image={val.image} />;
                })}
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
    color: 'white'
  },
  cash: {
    fontWeight: '700',
    fontSize: 20,
    color: 'white',
    marginTop: 5
  },
  cardMain: {
    width: '100%',
    backgroundColor: 'black',
    height: 200,
    marginTop: 30,
    alignSelf: 'center',
    elevation: 4
  },
  cardContainer: {
    borderRadius: 10,
    elevation: 3,
    marginBottom: 20,
    paddingRight: 15
  },
  saldo: {
    fontWeight: '700',
    fontSize: 20,
    color: 'white',
    marginTop: 5,
    fontSize: 13,
    fontWeight: 'bold',
    color: 'orange',
    paddingLeft: 6
  },
  line: {
    marginTop: 30,
    borderBottomColor: '#f3f3f3',
    borderBottomWidth: 7,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 20
  },
  banner: {
    alignSelf: 'center',
    width: '90%',
    height: 60,
    backgroundColor: '#e6f9f6',
    borderRadius: 20,
    marginBottom: 20,
    padding: 10,
    paddingLeft: 30
  }
});
export default Home;
