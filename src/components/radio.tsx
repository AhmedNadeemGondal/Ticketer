import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Radio({ iconName, type, detail, selectedRadio, setSelectedRadio }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setSelectedRadio(type)}>
        <View
          style={[
            styles.radioContainer,
            selectedRadio === type && { backgroundColor: COLORS.lightgreen }
          ]}
        >
          <View style={styles.iconContainer}>
            <Icon name={iconName} size={22} style={{ color: COLORS.black }} />
          </View>
          <View style={styles.textContainer}>
            <Text style={{ color: COLORS.black, fontSize: 18 }}>{type}</Text>
            <Text>{detail}</Text>
          </View>
          <View style={[styles.radioButtonOuter,
            selectedRadio === type && { borderColor: COLORS.darkgreen, }
          ]}>
            {selectedRadio === type && <View style={styles.radioButtonInner} />}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    paddingHorizontal: 0,
  },
  radioContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 15,
    marginTop: 20,
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    backgroundColor: COLORS.gray,
    alignSelf: 'center',
    padding: 12,
    margin: 20,
    borderRadius: 12,
  },
  textContainer: {
    flexDirection: 'column',
    width: 230,
  },
  radioButtonOuter: {
    width: 20,
    height: 20,
    borderColor: COLORS.gray,
    borderRadius: 10,
    borderWidth: 2,
  },
  radioButtonInner: {
    backgroundColor: COLORS.darkgreen,
    height: 12,
    width: 12,
    borderRadius: 6,
    position: 'absolute',
    top: 2,
    left: 2,
  },
});

