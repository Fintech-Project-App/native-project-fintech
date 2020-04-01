import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Item, Form, Input, Label, Thumbnail} from 'native-base';
import {Button, Avatar, Image, withTheme} from 'react-native-elements';
import BGStart from '../../Helpers/Image/bgstart.png';
import Logo from '../../Helpers/Image/QCToska.png';

function StartScreen(props) {
  return (
    <View style={{flex: 1}}>
      <ImageBackground source={BGStart} style={{width: '100%', height: '100%'}}>
        <View style={style.bgPage}>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Image source={Logo} style={style.brand} />
            <Text style={style.quotes}>
              Pay and transaction quickly, just quick cash
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Button
              title="Get started"
              buttonStyle={style.login}
              onPress={() => props.navigation.navigate('Register')}
            />
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text style={style.textLogin}>
                Already have an account ? Log in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const style = StyleSheet.create({
  bgPage: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  brand: {
    width: 150,
    height: 95,
    resizeMode: 'center',
    marginBottom: 5,
  },
  quotes: {
    fontSize: 15,
    color: '#505050',
    fontWeight: '500',
    marginTop: 2,
    marginBottom: 150,
    elevation: 4,
  },
  login: {
    marginTop: 60,
    width: 200,
    borderRadius: 10,
    backgroundColor: '#53C9BE',
    elevation: 4,
  },
  textLogin: {
    marginTop: 10,
    fontSize: 15,
    color: 'white',
  },
});
export default StartScreen;
