import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function FlatButton({
  text,
  onPress,
  style,
  width,
  height,
  backgroundColor,
  textColor,
  fontSize,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, style, {width, height, backgroundColor}]}>
        <Text
          style={[styles.buttonText, {color: textColor, fontSize: fontSize}]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
});
