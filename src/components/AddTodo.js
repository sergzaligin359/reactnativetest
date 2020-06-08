import React, {useState} from 'react'
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native'

export default ({ addTodo }) => {

    const [value, setValue] = useState('')

    const addTodoHandler = () => {

        if(value){
            addTodo(value)
            setValue('')
        }else{
            Alert.alert('Название задачи не может быть пустым!!!')
        }

    }

    return (
        <View style={styles.block}>
            <TextInput 
                onChangeText={text => setValue(text)}
                style={styles.input}
                value={value}
                placeholder={'Задача...'}
                autoCorrect={false}
            />
            <Button title={'Добавить'} onPress={ addTodoHandler  } />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    input: {
      width: '70%',
      padding: 10,
      borderStyle: 'solid',
      borderBottomWidth: 2,
      borderBottomColor: '#3949ab',
      marginBottom: 10,
    }
  })