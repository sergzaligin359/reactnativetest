import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default () => {
    
    return (

        <View style={styles.todo}>
            <Text>Todo screen</Text>
        </View>


    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        marginBottom: 10,
        borderRadius: 5,
    }
  })