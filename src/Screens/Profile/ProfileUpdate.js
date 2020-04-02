import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Picker,
} from 'react-native';
import {Avatar, Icon, Input, Button} from 'react-native-elements';
import {Form, Label, Item} from 'native-base';
import Icons from 'react-native-vector-icons/FontAwesome5';
import User from '../../Helpers/Image/opa.jpg';

function ProfileUpdate(props) {
  const [selectedValue, setSelectedValue] = React.useState('java');

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#53C9BE',
          flexDirection: 'row',
          marginBottom: -150,
        }}>
        <TouchableOpacity
          style={{width: 50, marginTop: 25}}
          onPress={() => props.navigation.goBack()}>
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
        }}>
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
            color="grey"
            size={15}
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 4, marginTop: 20}}>
        <ScrollView>
          <Input
            placeholder="Fullname"
            inputContainerStyle={{...style.input}}
            inputStyle={style.inputText}
          />
          <Input
            placeholder="Email"
            inputContainerStyle={{...style.input}}
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
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item label="Man" value="man" />
              <Picker.Item label="Woman" value="woman" />
            </Picker>
          </View>
          <Input
            placeholder="Address"
            inputContainerStyle={{...style.input}}
            inputStyle={style.inputText}
          />
          <View>
            <Button title="Edit" buttonStyle={style.update} />
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
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomWidth: 0,
    width: 250,
    alignSelf: 'center',
    backgroundColor: '#F5F5F5',
    marginTop: 10,
    elevation: 2,
  },
  inputText: {
    fontSize: 15,
    textAlign: 'center',
    color: '#525252',
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
    width: '70%',
    borderRadius: 18,
    backgroundColor: '#53C9BE',
    elevation: 4,
    alignSelf: 'center',
  },
  picker: {
    flex: 1,
    marginTop: 10,

    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#cfcfcf',
    borderRadius: 15,
    width: '70%',
    height: 50,
    alignSelf: 'center',
  },
});

export default ProfileUpdate;
