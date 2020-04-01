import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Image, Avatar, Icon, Button} from 'react-native-elements';
import Icons from 'react-native-vector-icons/FontAwesome5';
import BGProfile from '../../Helpers/Image/bgprofile.png';
import User from '../../Helpers/Image/opa.jpg';

function Profile(props) {
  return (
    <View style={{flex: 1, backgroundColor: '#f6f6f8'}}>
      <View style={{flex: 2}}>
        <Image source={BGProfile} style={{width: '100%', height: 140}} />

        <View style={{alignSelf: 'center'}}>
          <Avatar
            rounded
            source={User}
            size={130}
            title="MD"
            containerStyle={style.avatar}
          />
          <TouchableOpacity style={{marginTop: -50, marginLeft: 80}}>
            <Icon
              reverse
              name="ios-camera"
              type="ionicon"
              color="#53d3c4"
              size={15}
            />
          </TouchableOpacity>
          <View>
            <Text style={style.name}>Alen Dwi Aya</Text>
            <Text style={style.email}>example@gmail.com</Text>
          </View>
        </View>
        <View style={style.line} />
        <ScrollView>
          <View style={style.block}>
            <Text style={style.titleBlock}>Quick Code</Text>
            <TouchableOpacity>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Icon
                  reverse
                  name="ios-qr"
                  type="ionicon"
                  color="grey"
                  size={15}
                />
                <Text style={style.list}>QR Code</Text>
                <Icons name="chevron-right" size={13} style={style.icons} />
              </View>
            </TouchableOpacity>
            <View style={style.line} />
            <Text style={{...style.titleBlock, marginTop: 15}}>Account</Text>
            <TouchableOpacity>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Icon
                  reverse
                  name="ios-person"
                  type="ionicon"
                  color="grey"
                  size={15}
                />
                <Text style={style.list}>Change Profile</Text>
                <Icons name="chevron-right" size={13} style={style.icons} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Icon
                  reverse
                  name="ios-cloud-upload"
                  type="ionicon"
                  color="grey"
                  size={15}
                />
                <Text style={style.list}>Top Up Balance</Text>
                <Icons name="chevron-right" size={13} style={style.icons} />
              </View>
            </TouchableOpacity>
            <View style={style.line} />
            <Text style={{...style.titleBlock, marginTop: 15}}>Security</Text>
            <TouchableOpacity>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Icon
                  reverse
                  name="ios-code"
                  type="ionicon"
                  color="grey"
                  size={15}
                />
                <Text style={style.list}>Change Security Code</Text>
                <Icons name="chevron-right" size={13} style={style.icons} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Icon
                  reverse
                  name="ios-key"
                  type="ionicon"
                  color="grey"
                  size={15}
                />
                <Text style={style.list}>Change Password</Text>
                <Icons name="chevron-right" size={13} style={style.icons} />
              </View>
            </TouchableOpacity>
            <View style={style.line} />
            <Text style={{...style.titleBlock, marginTop: 15}}>About</Text>
            <TouchableOpacity>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Icon
                  reverse
                  name="ios-information-circle"
                  type="ionicon"
                  color="grey"
                  size={15}
                />
                <Text style={style.list}>About us</Text>
                <Icons name="chevron-right" size={13} style={style.icons} />
              </View>
            </TouchableOpacity>
            <View>
              <Text style={style.hastag}>#PakeQuickCashaja</Text>
              <Button title="Log Out" buttonStyle={style.logout} />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  avatar: {
    marginRight: 20,
    marginTop: -70,
    borderWidth: 5,
    borderColor: '#f6f6f8',
  },
  email: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 13,
    color: '#a6a6a6',
  },
  name: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 18,
    color: '#555555',
  },
  list: {
    fontWeight: '600',
    fontSize: 15,
    color: '#605f5f',
    marginLeft: 10,
    marginTop: 13,
  },
  line: {
    marginTop: 30,
    borderBottomColor: '#eaeaea',
    borderBottomWidth: 1,
    width: '100%',
    alignSelf: 'center',
  },
  icons: {
    color: '#c7c7c7',
    right: 0,
    width: 20,
    marginTop: 18,
    position: 'absolute',
  },
  block: {
    flex: 5,
    paddingHorizontal: 10,
    paddingLeft: 20,
    paddingTop: 20,
    marginBottom: 70,
  },
  titleBlock: {
    fontWeight: 'bold',
    color: '#4e4e4e',
    fontSize: 16,
  },
  logout: {
    marginTop: 20,
    width: '100%',
    borderRadius: 18,
    backgroundColor: '#53C9BE',
    paddingRight: 10,
    elevation: 4,
  },
  hastag: {
    marginTop: 10,
    fontSize: 13,
    color: 'grey',
    textAlign: 'right',
    marginRight: 10,
  },
});

export default Profile;
