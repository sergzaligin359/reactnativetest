import React, {useState} from 'react'
import { View, Modal, Alert, Text, Button, TextInput, StyleSheet } from 'react-native'

export default ({modal, setModal, id, title, onSave}) => {

    const [value, setValue] = useState(title)

    const handlerSave = () => {
        onSave(id, value)
    }

    return(
        <View>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modal}
                onRequestClose={() => Alert.alert('Modal has been closed.')}>
                <View style={styles.wrap}>
                    <TextInput 
                        style={styles.input}
                        placeholder='Введите название'
                        autoCapitalize='none'
                        autoCorrect={false}
                        maxLength={64}
                        onChangeText={setValue}
                        value={value}
                    />
                    <View style={styles.buttons}>
                        <Button
                            title="Сохранить"
                            onPress={() => {
                                handlerSave()
                                setModal(false)
                            }}>
                        </Button>
                        <Button
                            title="Закрыть"
                            onPress={() => setModal(false)}>
                        </Button>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    wrap: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    input: {
      padding: 10,
      borderBottomColor: '#030303',
      borderBottomWidth: 2,
      width: '80%'
    },
    buttons: {
      width: '100%',
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-around'
    }
  })
  