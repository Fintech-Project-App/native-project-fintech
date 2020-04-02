import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Overlay, Input } from 'react-native-elements';

function InputValue(props) {
  return (
    <View>
      <Overlay
        isVisible={props.isVisible}
        windowBackgroundColor="rgba(46, 46, 46, .9)"
        overlayBackgroundColor="white"
        width={300}
        height={260}
        borderRadius={20}
        style={{ padding: 20 }}
        overlayStyle={{ padding: 20, paddingTop: 40 }}>
        <>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 17,
              color: '#252525',
              marginTop: -10
            }}>
            Enter Your Nominal Transfer
          </Text>
          <Input
            placeholder="Value"
            keyboardType={'numeric'}
            inputContainerStyle={{ ...style.input }}
            inputStyle={style.inputText}
          />
          <Button
            title="Send"
            onPress={() => props.setIsVisible(false)}
            buttonStyle={style.confirm}
          />
        </>
      </Overlay>
    </View>
  );
}

const style = StyleSheet.create({
  confirm: {
    marginTop: 15,
    width: '50%',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#53C9BE',
    elevation: 4
  },
  input: {
    marginTop: 50,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomWidth: 0,
    width: 200,
    alignSelf: 'center',
    backgroundColor: 'white',
    elevation: 2
  },
  inputText: {
    fontSize: 15,
    textAlign: 'center',
    color: '#525252'
  }
});
export default InputValue;
