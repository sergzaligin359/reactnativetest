import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';

import NavBar from './src/components/NavBar';

import MainScreen from './src/screens/Main';
import TodoScreen from './src/screens/Todo';

export default function App() {

  const [todoId, setTodoId] = useState(null);

  const [todos, setTodos] = useState([]);

  const addTodo = title => {

    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title
    }]);

  };

  const delTodo = id => {
    setTodos(prev => [...prev.filter(todo => todo.id !== id)]);
  };

  console.log('todos', todos);

  let content = <MainScreen addTodo={addTodo} delTodo={delTodo} todos={todos} />;
  if(todoId) content = <TodoScreen addTodo={addTodo} delTodo={delTodo} todos={todos} />;

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
