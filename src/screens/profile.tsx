import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { COLORS } from '../constants';
import Header from '../components/header';
import { USERINFO } from '../constants';

export default function Profile({ navigation }) {
  return (
    <View style={styles.screen}>
      <Header navigation={navigation} headerTitle="Profile" />
      <View style={{flex:.8}}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Text style={styles.title}>Profile Details</Text>
          <Text style={styles.info}>Username</Text>
          <Text style={styles.text}>{USERINFO.username}</Text>
          <Text style={styles.info}>Employee ID</Text>
          <Text style={styles.text}>{USERINFO.employeeid}</Text>
          <Text style={styles.info}>Date of Birth</Text>
          <Text style={styles.text}>{USERINFO.date_of_birth}</Text>
          <Text style={styles.info}>Phone Number</Text>
          <Text style={styles.text}>{USERINFO.phone_number}</Text>
          <Text style={styles.info}>CNIC</Text>
          <Text style={styles.text}>{USERINFO.CNIC}</Text>
          <Text style={styles.info}>Email</Text>
          <Text style={styles.text}>{USERINFO.email}</Text>
        </View>
      </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  info: {
    fontSize: 22,
    marginBottom: 8,
    color: COLORS.black,
    marginTop: 5,
  },
  text: {
    borderWidth: 1,
    borderRadius:12,
    borderColor:COLORS.gray,
    fontSize: 18,
    padding: 10,
    color:COLORS.dark,
  },
});
