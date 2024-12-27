import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants';

import Header from '../components/header';
import Radio from '../components/radio';
import FlatButton from '../components/button';

export default function AddTicket({navigation}) {
  const [selectedRadio, setSelectedRadio] = useState('Request');
  // console.log(selectedRadio);

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <Header navigation={navigation} headerTitle="Raise a New Ticket" />
      <View style={styles.container}>
        <View style={styles.radioWrap}>
          <Radio
            iconName="account-circle-outline"
            type="Request"
            detail="Click here to drop your requests."
            selectedRadio={selectedRadio}
            setSelectedRadio={setSelectedRadio}
          />
          <Radio
            iconName="file-document-outline"
            type="Suggestion"
            detail="Anything that we can improve?"
            selectedRadio={selectedRadio}
            setSelectedRadio={setSelectedRadio}
          />
          <Radio
            iconName="ticket-outline"
            type="Complaint"
            detail="Let us know about your concerns here."
            selectedRadio={selectedRadio}
            setSelectedRadio={setSelectedRadio}
          />
        </View>
        <FlatButton
          text="Next"
          onPress={() => {
            navigation.navigate('Form',{selectedRadio});
          }}
          style={styles.button}
          width="98%"
          height={55}
          backgroundColor={COLORS.darkgreen}
          textColor={COLORS.white}
          fontSize={18}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  radioWrap: {},
  text: {
    fontSize: 18,
    color: COLORS.dark,
  },
  button: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    alignSelf: 'center',
  },
});
