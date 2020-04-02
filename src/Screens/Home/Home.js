import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Image, Card } from 'react-native-elements';
import Logo from '../../Helpers/Image/QC.png';
import Navbar from '../../Helpers/Image/navbar.png';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Home(props) {
  return (
    <View style={{ flex: 1 }}>
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
              style={{ width: '100%', height: '80%' }}>
              <View style={{ paddingHorizontal: 20 }}>
                <View>
                  <Text style={style.title}>Quick Cash</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ ...style.cash, fontSize: 12 }}>Rp </Text>
                    <Text style={{ ...style.cash }}>1000</Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text
                      style={{ ...style.cash, fontSize: 13, color: 'white' }}>
                      Quick Points
                    </Text>
                    <Text
                      style={{
                        ...style.cash,
                        fontSize: 13,
                        fontWeight: 'bold',
                        color: 'orange',
                        paddingLeft: 6,
                      }}>
                      7.200
                    </Text>
                  </View>
                </View>
                <View style={{ alignItem: 'center', marginTop: 10 }}>
                  <Card
                    style={{
                      width: '100%',
                      backgroundColor: 'black',
                      height: 200,
                      marginTop: 30,
                      alignSelf: 'center',
                      elevation: 4,
                    }}
                    containerStyle={{
                      borderRadius: 10,
                      elevation: 3,
                      marginBottom: 100,
                    }}>
                    <TouchableOpacity>
                      <Icons
                        name="history"
                        size={20}
                        style={{ color: '#37b2a1' }}
                      />
                    </TouchableOpacity>
                  </Card>
                </View>
              </View>
            </ImageBackground>
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
    fontSize: 20,
    color: 'white',
    marginTop: 5,
  },
});
export default Home;
