import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Card, Icon } from 'react-native-elements';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';
import formatRupiah from '../../Helpers/formatRupiah';
function TopupOther(props) {
  const { dataProfile } = useSelector((state) => state.userData);
  const data = [
    {
      name: 'ATM',
      icon: 'ios-card',
      color: '#81a652',
    },
    {
      name: 'Internet / Mobile Banking',
      icon: 'ios-phone-portrait',
      color: '#ff9900',
    },
    {
      name: 'Merchant',
      icon: 'ios-card',
      color: '#b085b4',
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#eeeded' }}>
      <View style={{ flex: 6 }}>
        <View style={style.container}>
          <Text style={{ color: 'grey', marginBottom: 3, fontSize: 12 }}>
            Top Up Balance To
          </Text>
          <Text style={style.title}>Quick Cash</Text>
          <View style={style.line} />
          <View style={style.square}>
            <Text style={style.blockTitle}>Saldo Quick Cash</Text>
            <Text style={{ ...style.blockTitle, fontWeight: 'bold' }}>
              Rp. {formatRupiah(dataProfile.balance)}
            </Text>
          </View>
          <Text style={style.textMax}>
            Maximum balance of quick cash Rp 5.000.000
          </Text>
        </View>
        <View
          style={{
            paddingTop: 13,
            paddingLeft: 30,
            marginRight: 30,
            alignItems: 'center',
          }}
        >
          <Text style={{ ...style.textMax, fontSize: 14, marginBottom: 15 }}>
            Use this method to make it easier for you
          </Text>
          <ScrollView>
            {data.map((val, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() => props.navigation.navigate('OnProgress')}
                >
                  <Card containerStyle={style.card}>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: -7,
                        marginBottom: -7,
                      }}
                    >
                      <Icon
                        reverse
                        name={val.icon}
                        type="ionicon"
                        color={val.color}
                        size={15}
                      />
                      <Text style={style.list}>{val.name}</Text>
                      <Icons
                        name="chevron-right"
                        size={13}
                        style={style.icons}
                      />
                    </View>
                  </Card>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f8',
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#646464',
  },
  square: {
    backgroundColor: 'grey',
    padding: 10,
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 15,
    borderColor: '#e5e4e4',
    backgroundColor: '#f6f6f8',
  },
  blockTitle: {
    textTransform: 'uppercase',
    color: '#646464',
  },
  textMax: {
    textAlign: 'center',
    fontSize: 12,
    color: '#515151',
    marginTop: 5,
  },
  line: {
    marginTop: 5,
    borderBottomColor: '#f3f3f3',
    borderBottomWidth: 2,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  list: {
    fontWeight: '600',
    fontSize: 13,
    color: '#605f5f',
    marginLeft: 10,
    marginTop: 13,
  },
  icons: {
    color: '#c7c7c7',
    right: 0,
    width: 20,
    marginTop: 18,
    position: 'absolute',
  },
  card: {
    width: 280,
    backgroundColor: '#f6f6f8',
    borderRadius: 6,
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 5,
  },
});
export default TopupOther;
