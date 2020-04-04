import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { Image, ListItem } from 'react-native-elements';
import Empty from '../../Helpers/Image/empty.png';
import Data from './Components/DataTransaction';

function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

function HistoryTransaction(props) {
  const [isAvailable, setIsAvailable] = React.useState(true);
  const [isIncoming, setIsIncoming] = React.useState('Incoming');
  const [isRender, setIsRender] = React.useState(10);
  const [throws, setThrows] = React.useState('');
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefreshing = React.useCallback(() => {
    setRefreshing(true);
    wait(200).then(() => {
      setRefreshing(false);
      setThrows(props.navigation.navigate('ProfileUpdate'));
    });
  }, [refreshing]);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 12, backgroundColor: 'white' }}>
        {isAvailable && (
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefreshing}
              />
            }
          >
            <View style={{ paddingHorizontal: 20 }}>
              {Data.map((val, index) => {
                if (index + 1 < isRender) {
                  return (
                    <TouchableOpacity
                      onPress={() =>
                        props.navigation.navigate('HistoryDetail', {
                          id: val.id,
                          name: val.name,
                          category: val.category,
                          picture: val.picture,
                          balance: val.topup_balance,
                          date: val.created_on,
                          desc: val.desc,
                        })
                      }
                    >
                      <ListItem
                        title={val.name}
                        titleStyle={{ fontWeight: 'bold', color: '#383838' }}
                        subtitle={
                          <View>
                            <View>
                              <Text style={style.categoryTitle}>
                                {val.category}
                              </Text>
                            </View>
                            <View>
                              <Text style={style.date}>{val.created_on}</Text>
                              <Text style={style.balance}>
                                {isIncoming === val.category ? '+ ' : '- '}
                                Rp. {val.topup_balance}
                              </Text>
                            </View>
                          </View>
                        }
                        bottomDivider
                        leftAvatar={{ source: { uri: val.picture } }}
                      />
                    </TouchableOpacity>
                  );
                }
              })}
            </View>
            <View style={{ flex: 1, height: 80 }}></View>
          </ScrollView>
        )}
        {!isAvailable && (
          <View style={style.container}>
            <Text
              style={{ fontSize: 18, fontWeight: 'bold', color: '#1f675e' }}
            >
              View History
            </Text>
            <Text style={{ color: '#909090' }}>There is no transaction</Text>
            <Image source={Empty} style={style.emptyImg} />
          </View>
        )}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  emptyImg: {
    width: 200,
    height: 200,
  },
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 100,
  },
  categoryTitle: {
    marginTop: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#50b5a6',
    borderRadius: 10,
    width: 80,
    color: 'white',
    fontSize: 12,
  },
  date: {
    color: '#afadad',
    marginTop: 5,
  },
  balance: {
    color: '#afadad',
    position: 'absolute',
    right: 0,
    marginTop: 3,
  },
  iconDel: {
    width: 50,
    marginLeft: '100%',
    left: 0,
    marginTop: 10,
  },
  containerDel: {
    flex: 1,
    alignItems: 'center',
    paddingRight: 10,
    marginTop: 7,
    backgroundColor: 'white',
  },
});
export default HistoryTransaction;
