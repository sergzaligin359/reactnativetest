import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default ({ title }) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        paddingBottom: 10,
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#3949ab'
    },
    text: {
        color: '#fff'
    }
})