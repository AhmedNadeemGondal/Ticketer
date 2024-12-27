import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default function CustomTabBarButton(props) {
  // console.log(props);
  const {children, accessibilityState, onPress} = props;
  // console.log(children);
  if (accessibilityState.selected) {
    return (
      <View style={styles.whiteBorder}>
      <View style={styles.btnWrap}>
        <TouchableOpacity onPress={onPress} style={styles.tabActive}>
          {children}
        </TouchableOpacity>
      </View>
      </View>
    );
  } else {
    return (
      <View style={styles.whiteBorder}>
      <View style={styles.btnWrap}>
        <TouchableOpacity onPress={onPress} style={styles.tabInActive}>
          {children}
        </TouchableOpacity>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabActive: {
    backgroundColor: '#038f05',
    width: 50,
    height:50,
    borderRadius:50/2,
  },
  tabInActive: {
    backgroundColor: '#038f05',
    width: 50,
    height:50,
    borderRadius:50/2,
  },
  btnWrap: {
    // flex: 1,
    alignItems: 'center',
    // height: 60,
  },
  whiteBorder:{
    // flex: 1,
    justifyContent:'center',
    backgroundColor: 'white',
    width: 70,
    height:70,
    top: -40,

    borderRadius:50,
  }
});
