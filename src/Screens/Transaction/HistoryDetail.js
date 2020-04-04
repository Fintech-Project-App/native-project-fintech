import React from 'react';
import { View, Text } from 'react-native';

function HistoryDetail(props) {
  return (
    <View>
      {console.log('chelkkkk', props.route.params.id)}
      <Text>{props.route.params.name}</Text>
    </View>
  );
}
export default HistoryDetail;
