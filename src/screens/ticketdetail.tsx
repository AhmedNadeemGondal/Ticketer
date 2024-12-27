import React from 'react'
import {
    StyleSheet,
    View, Text
} from 'react-native';
import Card from '../components/card';
import { COLORS } from '../constants';
import Header from '../components/header';

export default function TicketDetail({ route, navigation }) {
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
    const { item } = route.params;
    // console.log(route.params);
    return (
        <View style={styles.container}>
            <Header navigation={navigation} headerTitle='Ticket Details'/>
            <View style={{paddingTop:10,}}>
            <Card item={item} />
            <View style={[styles.textContainer, { backgroundColor: typeChecker(item.Ticket_Type) }]}>
                <Text style={[styles.text, { fontSize: 20, borderBottomWidth: 2, alignSelf: 'flex-start', }]}>Details</Text>
                <Text style={styles.text}>
                    {item.Body}
                </Text>
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // paddingTop: 12,

        backgroundColor: COLORS.white,
    }, textContainer: {
        backgroundColor: COLORS.verylightgreen,
        marginHorizontal: 16,
        marginVertical: 0,
        borderRadius: 12,
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: COLORS.black,
        fontSize: 16,
    }, text: {

        paddingTop: 10,
        color: COLORS.black,
        fontSize: 16,
    }
})
