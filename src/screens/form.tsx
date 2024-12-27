import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView,TouchableWithoutFeedback, Keyboard } from 'react-native';
import { COLORS } from '../constants';
import Header from '../components/header';
import { Picker } from '@react-native-picker/picker';

import { TicketsContext } from '../components/ticketContext';

export default function Form({ route, navigation }) {
  // Extract selectedRadio from route.params
  const { selectedRadio } = route.params;
  const { addTicket } = useContext(TicketsContext);

  // State for form fields
  const [ticketType, setTicketType] = useState(selectedRadio);
  const [status, setStatus] = useState('To Do');
  const [department, setDepartment] = useState('IT');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // State for error messages
  const [titleError, setTitleError] = useState('');
  const [bodyError, setBodyError] = useState('');

  // Hide bottom tab bar on this screen
  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } });

    return () => 
      navigation.getParent()?.setOptions({ tabBarStyle: {
        position: 'absolute',
        backgroundColor: COLORS.lightgreen,
        height: 60,
        borderWidth: 0,
        borderRadius: 50,
        marginHorizontal: 40,
        marginBottom: 15,
        elevation: 0,
      } });
  }, [navigation]);

  // Function to validate form inputs
  const validateForm = () => {
    let valid = true;
    setTitleError('');
    setBodyError('');

    // Check if title is empty or less than 6 characters
    if (!title) {
      setTitleError('Title is required');
      valid = false;
    } else if (title.length < 6) {
      setTitleError('Title should be longer than 6 characters');
      valid = false;
    }

    // Check if body is empty or less than 4 words
    const wordCount = body.trim().split(/\s+/).length;
    if (!body) {
      setBodyError('Body is required');
      valid = false;
    } else if (wordCount < 4) {
      setBodyError('Body should be longer than 3 words');
      valid = false;
    }

    return valid;
  };

  // Function to handle form submission
  const handleSubmit = () => {
    if (validateForm()) {
      const randomKey = Math.floor(Math.random() * 10000).toString();
      const currentDate = new Date().toISOString().split('T')[0];

      const newTicket = {
        key: randomKey,
        Ticket_Type: ticketType,
        Status: status,
        Department: department,
        Date: currentDate,
        Title: title,
        Body: body,
      };

      // Add ticket to context
      addTicket(newTicket);

      // Reset the form fields to empty
      setTitle('');
      setBody('');

      // Log the new ticket or navigate with the newTicket data
      console.log(newTicket);
      // navigation.navigate('Dashboard', {newTicket});
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} headerTitle="Form" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.label}>Ticket Type</Text>
        <Picker
          selectedValue={ticketType}
          onValueChange={(itemValue) => setTicketType(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Request" value="Request" />
          <Picker.Item label="Suggestion" value="Suggestion" />
          <Picker.Item label="Complaint" value="Complaint" />
        </Picker>

        <Text style={styles.label}>Status</Text>
        <Picker
          selectedValue={status}
          onValueChange={(itemValue) => setStatus(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="To Do" value="To Do" />
          <Picker.Item label="In Progress" value="In Progress" />
          <Picker.Item label="Completed" value="Completed" />
          <Picker.Item label="Defer" value="Defer" />
        </Picker>

        <Text style={styles.label}>Department</Text>
        <Picker
          selectedValue={department}
          onValueChange={(itemValue) => setDepartment(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="IT" value="IT" />
          <Picker.Item label="Mobile Development" value="Mobile Development" />
          <Picker.Item label="Sales" value="Sales" />
        </Picker>

        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Enter Title"
        />
        {titleError ? <Text style={styles.error}>{titleError}</Text> : null}

        <Text style={styles.label}>Body</Text>
        <TextInput
          style={styles.textArea}
          value={body}
          onChangeText={setBody}
          placeholder="Enter Body"
          multiline
        />
        {bodyError ? <Text style={styles.error}>{bodyError}</Text> : null}

        <Button title="Submit" onPress={handleSubmit} color={COLORS.darkgreen} />
      </ScrollView>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: COLORS.white,
  },
  label: {
    fontSize: 16,
    color: COLORS.dark,
    marginBottom: 8,
  },
  picker: {
    height: 50,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.dark,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  textArea: {
    borderWidth: 1,
    borderColor: COLORS.dark,
    padding: 10,
    height: 100,
    marginBottom: 20,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});
