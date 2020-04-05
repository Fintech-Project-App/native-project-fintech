import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { Image, ListItem, Divider } from 'react-native-elements';
import Empty from '../../Helpers/Image/empty.png';
import formatRupiah from '../../Helpers/formatRupiah';
import { useSelector } from 'react-redux';
import { API_URL } from 'react-native-dotenv';
import { getData } from '../../Helpers/CRUD';

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

function HistoryTopup(props) {
  const [throws, setThrows] = React.useState('');
  const [refreshing, setRefreshing] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [statusNextPage, setStatusNextPage] = React.useState(true);
  const [dataHistory, setDataHistory] = React.useState(false);
  const { dataProfile } = useSelector((state) => state.userData);
  const historyTopup = async (activePage) => {
    try {
      const response = await getData(
        'history-topup?limit=10&page=' + activePage
      );
      if (response.data && response.data.success && response.data.data) {
        setStatusNextPage(response.data.pagination.nextPage ? true : false);
        if (activePage > 1) {
          setDataHistory((data) => [...data, ...response.data.data]);
        } else {
          setDataHistory(response.data.data);
        }
      }
      return response.data.data;
    } catch (err) {
      console.log(err);
    }
  };
  const handleLoadMore = async () => {
    if (statusNextPage) {
      setPage(page + 1);
    }
  };

  const onRefreshing = React.useCallback(() => {
    setRefreshing(true);
    wait(200).then(async () => {
      setRefreshing(false);
      setPage(1);
    });
  }, [refreshing]);
  React.useEffect(() => {
    historyTopup(page);
  }, [page]);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 12, backgroundColor: 'white' }}>
        {dataHistory && dataHistory.length > 0 && (
          <>
            <View style={{ paddingHorizontal: 20 }}>
              <FlatList
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefreshing}
                  />
                }
                showsVerticalScrollIndicator={true}
                keyExtractor={(item, index) => index}
                data={dataHistory}
                onEndReached={() => handleLoadMore()}
                onEndReachedThreshold={0.01}
                renderItem={({ item, index }) => (
                  <ListItem
                    title={
                      dataProfile.fullname !== null
                        ? dataProfile.fullname
                        : dataProfile.username
                    }
                    titleStyle={{ fontWeight: 'bold', color: '#383838' }}
                    subtitle={
                      <View>
                        <View>
                          <Text style={style.categoryTitle}>Topup</Text>
                        </View>
                        <View>
                          <Text style={style.date}>
                            {new Date(item.createdAt).toDateString()}
                          </Text>
                          <Text style={style.balance}>
                            + Rp.{formatRupiah(item.topup_balance)}
                          </Text>
                        </View>
                      </View>
                    }
                    bottomDivider
                    leftAvatar={{
                      source: { uri: API_URL + dataProfile.picture },
                    }}
                  />
                )}
              />
            </View>
            <View style={{ flex: 1, height: 80 }} />
          </>
        )}
        {!(dataHistory && dataHistory.length > 0) && (
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
export default HistoryTopup;
