import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Income from '../../Helpers/Image/income.png';
import Outgoing from '../../Helpers/Image/outgoing.png';
import Icon from 'react-native-vector-icons/FontAwesome5';

function HistoryDetail(props) {
  const [isPicture, setPicture] = React.useState('Incoming');
  const [isIncoming, setIsIncoming] = React.useState('Incoming');

  return (
    <View style={{ flex: 1 }}>
      <View style={style.topContainer}>
        <TouchableOpacity
          style={{ width: 50, marginTop: 25 }}
          onPress={() => props.navigation.navigate('Home')}>
          <Icons name="chevron-left" size={20} style={style.backIcon} />
        </TouchableOpacity>
        <Text style={style.title}>Detail</Text>
      </View>
      <View style={{ flex: 9, backgroundColor: 'white' }}>
        <View
          style={{
            backgroundColor: '#f7f7f6',
            height: 150,
          }}>
          <View style={{ flexDirection: 'row' }}>
            <Avatar
              rounded
              source={{ uri: props.route.params.picture }}
              size={50}
              title=""
              containerStyle={style.avatarUser}
            />

            <View>
              <Text style={style.titlePartner}>{props.route.params.name}</Text>
              <Text style={style.categoryTitle}>
                {props.route.params.category}
              </Text>
            </View>
            <Text style={style.balance}>
              {isIncoming === props.route.params.category ? '+ ' : '- '}
              Rp. {props.route.params.balance}
            </Text>
          </View>
        </View>
        <View style={{ backgroundColor: 'white', height: 200 }}>
          <Avatar
            rounded
            source={
              isPicture === props.route.params.category ? Income : Outgoing
            }
            size={110}
            title=""
            containerStyle={style.avatar}
          />
          <View style={{ paddingHorizontal: 30 }}>
            <Text style={style.detail}>Detail</Text>
            <ListItem
              subtitle={
                <View style={style.detailContainer}>
                  <View style={{ flexDirection: 'row' }}>
                    <Icon name="clock" size={17} style={style.iconDetail} />
                    <Text style={style.date}>{props.route.params.date}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Icon
                      name="pen-square"
                      size={17}
                      style={style.iconDetail}
                    />
                    <Text style={style.desc}>{props.route.params.desc}</Text>
                  </View>
                </View>
              }
              bottomDivider
            />
          </View>
        </View>
      </View>
    </View>
  );
}
export default HistoryDetail;

const style = StyleSheet.create({
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#50b5a6',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
    marginTop: 22,
    marginLeft: 30,
    marginBottom: 20,
  },
  backIcon: {
    color: 'white',
    marginLeft: 15,
    width: 20,
  },
  line: {
    borderBottomColor: '#50b5a6',
    borderBottomWidth: 4,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  avatar: {
    alignSelf: 'center',
    marginRight: 20,
    marginTop: -57,
    marginBottom: 20,
    borderWidth: 5,
    borderColor: '#f6f6f8',
    elevation: 4,
    backgroundColor: 'white',
  },
  avatarUser: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#f6f6f8',
    backgroundColor: 'white',
  },
  titlePartner: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#555555',
    marginTop: 23,
  },
  categoryTitle: {
    paddingVertical: 1,
    marginLeft: -5,
    marginTop: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#50b5a6',
    borderRadius: 10,
    width: 80,
    height: 20,
    color: 'white',
    fontSize: 12,
  },
  balance: {
    color: '#9d9d9d',
    position: 'absolute',
    right: 0,
    marginTop: 45,
    marginHorizontal: 20,
  },
  detail: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#555555',
  },
  detailContainer: {
    marginTop: -20,
  },
  date: {
    color: 'grey',
  },
  desc: {
    color: '#3f3f3f',
  },
  iconDetail: {
    color: '#b9b3b3',
    marginRight: 10,
    marginLeft: -15,
  },
});
