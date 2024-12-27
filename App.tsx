import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import TabNav from './src/routes/BTNavigator';
import { COLORS } from './src/constants';
import TicketsProvider from './src/components/ticketContext';

export default function App(){
  return(
    <>
    <StatusBar
      barStyle="light-content" // You can also use "dark-content" if preferred
      backgroundColor={COLORS.lightgreen} // Set your desired status bar background color
    />
    <TicketsProvider>
    <NavigationContainer>
      <TabNav />
    </NavigationContainer>
    </TicketsProvider>
  </>
  )
}