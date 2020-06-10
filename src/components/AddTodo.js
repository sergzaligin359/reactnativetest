import React, {useState} from 'react'
import { View, StyleSheet, TextInput, Keyboard, Alert } from 'react-native'

import { AntDesign } from '@expo/vector-icons'

export default ({ addTodo }) => {

    const [value, setValue] = useState('')

    const addTodoHandler = () => {

        if(value){
            addTodo(value)
            setValue('')
            Keyboard.dismiss()
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
           <AntDesign.Button onPress={ addTodoHandler } name="plus" size={16} color="black">Добавить</AntDesign.Button>
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