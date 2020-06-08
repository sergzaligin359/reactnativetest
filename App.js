import React, {useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import NavBar from './src/NavBar';
import AddTodo from './src/AddTodo';
import Todo from './src/Todo';

export default function App() {

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
  
  return (
    <View>
      <NavBar title={'My App'} />
      <View style={styles.container}>
        <AddTodo addTodo={addTodo} />
        <FlatList
          keyExtractor={item => item.id}
          data={todos}
          renderItem={({item}) => <Todo title={item.title} id={item.id} delTodo={delTodo} />}
        />
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
