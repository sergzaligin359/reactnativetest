import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default ({id, title, delTodo, onOpen}) => {

    const handleLongPress = () => {
      delTodo(id, title)
    }

    const handlePress = () => {
      onOpen(id)
    }
    
    return (
      <TouchableOpacity 
        onPress={handlePress}
        onLongPress={handleLongPress}
      >
        <View style={styles.todo}>
          <Text>{title} - {id}</Text>
        </View>
      </TouchableOpacity>

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