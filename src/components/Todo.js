import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default ({id, title, delTodo}) => {

    const handleLongPress = () => {
      delTodo(id)
    }
    
    return (
      <TouchableOpacity onLongPress={handleLongPress}>
        <View style={styles.todo}>
          <Text>{title}</Text>
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