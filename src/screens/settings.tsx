
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../constants';

import Header from '../components/header';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Settings({ navigation }) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} headerTitle="Settings" />
      <View style={{flex:1,}}>
      <TouchableOpacity 
        onPress={() => navigation.navigate("Profile")} 
        style={styles.buttonContainer}
      >
        <View style={styles.innerContainer}>
          <View style={styles.profileInfo}>
            <Image
              source={require('../assets/avatar.png')}
              style={styles.avatar}
            />
            <Text style={styles.profileText}>View Profile</Text>
          </View>
          <View style={styles.iconContainer}>
            <Icon name="right" size={22} style={styles.icon} />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.navigate("Password")} 
        style={styles.buttonContainer}
      >
        <View style={styles.innerContainer}>
          <View style={styles.profileInfo}>
          <Icon name="key" size={32} style={[styles.avatar, {marginTop:5,}]} />
            <Text style={styles.profileText}>Change Password</Text>
          </View>
          <View style={styles.iconContainer}>
            <Icon name="right" size={22} style={styles.icon} />
          </View>
        </View>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    // flex: 1,
  },
  innerContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal:20,
    height: 80,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 18,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    marginLeft: 20,
    marginRight: 20,
  },
  profileText: {
    fontSize: 18,
    fontWeight: 'bold',
    color:COLORS.black,
  },
  iconContainer: {
    padding: 10,
    marginLeft: 30,
    borderRadius: 10,
  },
  icon: {
    color: COLORS.black,
  },
});
