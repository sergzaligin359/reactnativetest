import React, {useState} from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

import AppCard from '../components/ui/Card'
import EditModal from '../components/EditModal'

import {DANGER_COLOR} from '../theme'

export default ({ goBack, todo, delTodo, onSave }) => {

    const [modal, setModal] = useState(false) 

    const handlerDel = () => {
        delTodo(todo.id, todo.title)
        goBack()
    }
    
    return (

        <View>
            <AppCard style={styles.card}>
                <Text>{ todo.title }</Text>
                <Button title="Редактировать" onPress={() => setModal(true)} />
            </AppCard>
            <View style={styles.buttons}>
                <Button title="Назад" onPress={goBack} />
                <Button title="Удалить" color={ DANGER_COLOR } onPress={handlerDel} />
            </View>
            <EditModal title={todo.title} id={todo.id} modal={modal} setModal={setModal} onSave={onSave} />
        </View>

    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        marginBottom: 10,
        borderRadius: 5,
    },
    card: {
        marginBottom: 20
    }
  })