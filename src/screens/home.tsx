import React, {useState, useContext} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {COLORS, DATA} from '../constants';
import Card from '../components/card';
import FlatButton from '../components/button';
import DashHeader from '../components/dashheader';

import { TicketsContext } from '../components/ticketContext';

export default function Home({navigation}) {
  // const [ticket, setTicket] = useState(DATA);
  // const {newTicket} = route.params;
  // console.log(newTicket);
  const { tickets } = useContext(TicketsContext);

  return (
    <View style={styles.container}>
      <DashHeader navigation={navigation} />
      <View style={{height: '80%'}}>
        <View style={styles.topFlex}>
          <Text style={styles.text}>Recent Tickets</Text>
          <FlatButton
            text="See All"
            onPress={() => {
              // console.log('See All Pressed!');
              navigation.navigate('All Tickets', tickets);
              // , navigation
            }}
            style={styles.button}
            width={100}
            height={30}
            backgroundColor={COLORS.darkgreen}
            textColor={COLORS.white}
            fontSize={14}
          />
        </View>
        <FlatList
          data={tickets.slice(0, 3)}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Ticket Detail', {item})}>
              <Card item={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  topFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 8,
    height: 60,
    width: '100%',
  },
  text: {
    fontSize: 24,
    color: COLORS.dark,
    paddingLeft: 36,
  },
  button: {
    marginRight: 36,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
});
