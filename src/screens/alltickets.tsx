import React from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants';

import Card from '../components/card';
import Header from '../components/header';

export default function AllTickets({ route, navigation }) {
    const ticket = route.params; // Access the tickets array
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            <Header navigation={navigation} headerTitle='All Tickets' />
            <View style={styles.container}>
                <FlatList
                    data={ticket}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ticket Detail', { item })}>
                            <Card item={item} />
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: .8,

        backgroundColor: COLORS.white,
        paddingTop: 10,
    },
    text: {
        fontSize: 18,
        color: COLORS.dark,
    }
})