import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { COLORS } from '../constants';

import Header from '../components/header';

export default function Notifications({navigation, route}){
    return(
        <View style={{flex:1,}}>
<Header navigation={navigation} headerTitle={route.name}/>
        
    <View style={styles.container}>
        
        <Text style={styles.text}>
            Notifications
        </Text>
    </View>
    </View>
)}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:COLORS.white,
    },
    text:{
        fontSize:18,
        color:COLORS.dark,
    }
})