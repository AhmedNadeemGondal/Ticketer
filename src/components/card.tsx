import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants';

export default function Card({item}) {
  const date = new Date(item.Date);
  const day = date.getDate();
  const month = date.toLocaleString('default', {month: 'short'});
  const year = date.getFullYear();
  const formattedDate = `${day} ${month}, ${year}`;

  let statusColor; // Use 'let' to declare a variable that can be reassigned
  const taskChecker = status => {
    if (status === 'To Do') {
      statusColor = COLORS.skyblue;
    } else if (status === 'In Progress') {
      statusColor = COLORS.yellow;
    } else if (status === 'Done') {
      statusColor = COLORS.darkgreen;
    } else if (status === 'Defer') {
      statusColor = COLORS.gray;
    } else {
      statusColor = 'defaultColor'; // Optionally handle unexpected status values
    }
    return statusColor;
  };

  let typeColor;
  const typeChecker = type => {
    if (type === 'To Do') {
      typeColor = COLORS.skyblue;
    } else if (type === 'Suggestion') {
      typeColor = COLORS.verylightyellow;
    } else if (type === 'Request') {
      typeColor = COLORS.verylightgreen;
    } else if (type === 'Complaint') {
      typeColor = COLORS.verylightgreen;
    } else {
      typeColor = 'defaultColor'; // Optionally handle unexpected status values
    }
    return typeColor;
  };

  return (
    <View
      style={[styles.card, {backgroundColor: typeChecker(item.Ticket_Type)}]}>
      <View style={styles.cardContent}>
        <Text style={styles.requestType}>{item.Ticket_Type}</Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <Text>{formattedDate}</Text>
          <Text
            style={{
              backgroundColor: taskChecker(item.Status),
              paddingHorizontal: 5,
              paddingVertical: 1.5,
              borderRadius: 8,
              color: COLORS.black,
            }}>
            &#9679; {item.Status}
          </Text>
        </View>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.black}}>
          {item.Title}
        </Text>
        <Text style={{fontSize: 14, color: COLORS.black}}>
          {item.Department}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.verylightgreen,
    marginHorizontal: 16,
    marginVertical: 10,
    borderRadius: 12,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
  requestType: {
    top: -20,
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
});
