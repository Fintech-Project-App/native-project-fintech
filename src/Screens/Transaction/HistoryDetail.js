import React from 'react';
import { View, Text } from 'react-native';

function HistoryDetail(props) {
  return (
    <View>
      <Text>{props.navigation.name}</Text>
    </View>
  );
}
export default HistoryDetail;
