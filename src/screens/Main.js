import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import AddTodo from '../components/AddTodo'
import Todo from '../components/Todo'

export default ({ addTodo, delTodo, todos, onOpen }) => {
    
    return (

        <View style={styles.main}>
            <AddTodo addTodo={addTodo} />
            <FlatList
                keyExtractor={item => item.id}
                data={todos}
                renderItem={({item}) => <Todo title={item.title} id={item.id} delTodo={delTodo} onOpen={onOpen} />}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    main: {

    }
  })