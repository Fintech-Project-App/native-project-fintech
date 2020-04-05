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
import { Image, ListItem } from 'react-native-elements';
import Empty from '../../Helpers/Image/empty.png';
import formatRupiah from '../../Helpers/formatRupiah';
import { useDispatch, useSelector } from 'react-redux';
import { historyTopup } from '../../Redux/actions/userDataAction';
import { API_URL } from 'react-native-dotenv';

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
  const [isLoading, setIsLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);

  const dispatch = useDispatch();
  const { dataHistory } = useSelector((state) => state.historyData);
  const { dataProfile } = useSelector((state) => state.userData);
  console.log(isLoading);

  const renderFooter = () => {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  const handleLoadMore = () => {
    setPage(page + 1);
    dispatch(historyTopup(page));
  };

  React.useCallback(() => {
    setIsLoading(!isLoading);
    dispatch(historyTopup());
  }, []);

  const onRefreshing = React.useCallback(() => {
    setRefreshing(true);
    wait(200).then(() => {
      setRefreshing(false);
      setThrows(dispatch(historyTopup()));
    });
  }, [refreshing]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 12, backgroundColor: 'white' }}>
        {Object.keys(dataHistory).length > 0 && (
          <>
            <View style={{ paddingHorizontal: 20 }}>
              <FlatList
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefreshing}
                  />
                }
                keyExtractor={(item) => item.id}
                data={dataHistory}
                ListFooterComponent={renderFooter}
                onEndreached={handleLoadMore}
                onEndreachedThreshold={0}
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
            <View style={{ flex: 1, height: 80 }}></View>
          </>
        )}
        {Object.keys(dataHistory).length < 1 && (
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
export default HistoryTopup;
