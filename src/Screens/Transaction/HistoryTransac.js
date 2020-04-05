import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  FlatList,
} from 'react-native';
import { Image, ListItem } from 'react-native-elements';
import Empty from '../../Helpers/Image/empty.png';
import { getData } from '../../Helpers/CRUD';
import { API_URL } from 'react-native-dotenv';
import formatRupiah from '../../Helpers/formatRupiah';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
  'Warning: VirtualizedLists should never be nested inside plain ScrollViews with the same orientation',
  'Warning: Failed child context type: Invalid child',
]);

function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

function HistoryTransaction(props) {
  const [isIncoming, setIsIncoming] = React.useState('Incoming Transfer');
  const [refreshing, setRefreshing] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [statusNextPage, setStatusNextPage] = React.useState(true);
  const [dataTransaction, setDataTransaction] = React.useState(false);
  const historyTransaction = async (activepage) => {
    try {
      const response = await getData(
        'history-transaction?limit=10&page=' + activepage
      );
      if (response.data && response.data.success && response.data.data) {
        setStatusNextPage(response.data.pagination.nextPage ? true : false);
        if (page > 1) {
          setDataTransaction((data) => [...data, ...response.data.data]);
        } else {
          setDataTransaction(response.data.data);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  const onRefreshing = React.useCallback(() => {
    setRefreshing(true);
    wait(200).then(() => {
      setRefreshing(false);
      setPage(1);
      historyTransaction(1);
    });
  }, [refreshing]);

  const handleLoadMore = () => {
    if (statusNextPage) {
      setPage(page + 1);
    }
  };
  React.useEffect(() => {
    historyTransaction(page);
  }, [page]);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 12, backgroundColor: 'white' }}>
        {dataTransaction && dataTransaction.length > 0 && (
          <>
            <View style={{ paddingHorizontal: 20 }}>
              <FlatList
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefreshing}
                  />
                }
                onEndReached={() => handleLoadMore()}
                onEndReachedThreshold={0.01}
                keyExtractor={(item, index) => index}
                data={dataTransaction}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate('HistoryDetail', {
                        name: item.senderName || item.receiverName,
                        category: item.type_transaction,
                        picture: item.senderPicture || item.receiverPicture,
                        balance: item.amount,
                        date: item.createdAt,
                        desc: item.message,
                      })
                    }
                  >
                    <ListItem
                      title={item.receiverName || item.senderName}
                      titleStyle={{ fontWeight: 'bold', color: '#383838' }}
                      subtitle={
                        <View>
                          <View>
                            <Text style={style.categoryTitle}>
                              {item.type_transaction}
                            </Text>
                          </View>
                          <View>
                            <Text style={style.date}>
                              {new Date(item.createdAt).toDateString()}
                            </Text>
                            <Text style={style.balance}>
                              {isIncoming === item.type_transaction
                                ? '+ '
                                : '- '}
                              Rp. {formatRupiah(item.amount)}
                            </Text>
                            <Text style={style.from}>
                              {isIncoming === item.type_transaction
                                ? 'From'
                                : 'For'}
                            </Text>
                          </View>
                        </View>
                      }
                      bottomDivider
                      leftAvatar={{
                        source: {
                          uri:
                            API_URL +
                            (item.senderPicture || item.receiverPicture),
                        },
                      }}
                    />
                  </TouchableOpacity>
                )}
              />
            </View>
            <View style={{ flex: 1, height: 80 }} />
          </>
        )}
        {!(dataTransaction && dataTransaction.length > 0) && (
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefreshing}
              />
            }
          >
            <View style={style.container}>
              <Text
                style={{ fontSize: 18, fontWeight: 'bold', color: '#1f675e' }}
              >
                View History
              </Text>
              <Text style={{ color: '#909090' }}>There is no transaction</Text>
              <Image source={Empty} style={style.emptyImg} />
            </View>
          </ScrollView>
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
    borderRadius: 7,
    width: 115,
    padding: 2,
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
  from: {
    position: 'absolute',
    right: 0,
    marginTop: -41,
    backgroundColor: '#bbbbbb',
    borderRadius: 6,
    width: 40,
    textAlign: 'center',
    color: 'white',
    fontSize: 11,
    padding: 2,
  },
});
export default HistoryTransaction;
