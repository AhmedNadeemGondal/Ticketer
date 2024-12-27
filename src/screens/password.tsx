import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../constants';

import Header from '../components/header';

export default function Password({navigation}){
    return(
        <View style={{flex:1,}}>
            <Header navigation={navigation} headerTitle="Password" />
            <View style={{flex:1,}}>
            <Text>Change Password</Text>
            </View>
        </View>
    )
}