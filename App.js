import React, {useState} from 'react';
import { StyleSheet, View, Alert } from 'react-native';

import NavBar from './src/components/NavBar';

import MainScreen from './src/screens/Main';
import TodoScreen from './src/screens/Todo';

export default function App() {

  const [todoId, setTodoId] = useState(null);

  const [todos, setTodos] = useState([]);

  const [todo, setTodo] = useState({});

  const addTodo = title => {

    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title
    }]);

  };
  const updateTodo = (id, title) => {
    setTodos(prev => prev.map(todo => {
        if(todo.id === id){
          todo.title = title;
        }
        return todo;
      })
    )
  };
  const delTodo = (id, title) => {
    Alert.alert(
      'Удаление элемента',
      `Вы уверены что хотите удалить элемент ${title}?`,
      [
        {text: 'Отмена', style: 'cancel'},
        {text: 'Удалить', onPress: () => setTodos(prev => [...prev.filter(todo => todo.id !== id)])},
      ],
      { cancelable: false }
    )
  };

  const onOpen = id => {
    setTodoId(id);
    setTodo(todos.find(todo => id == todo.id));
  }

  const goBack = () => setTodoId(null);

  console.log('todos', todos);

  let content = <MainScreen addTodo={addTodo} delTodo={delTodo} todos={todos} onOpen={onOpen} />;
  if(todoId) content = <TodoScreen todo={todo} onSave={updateTodo} delTodo={delTodo} goBack={goBack} todos={todos} />;

  return (
    <View>
      <NavBar title={'My App'} />
      <View style={styles.container}>
        {
          content
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
});
