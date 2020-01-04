/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text} from 'react-native';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

const App = () => {
  return (
    <View testID="welcome">
      <Text>ToDo TDD</Text>
      <AddToDo />
      <ToDoList />
    </View>
  );
};

export default App;
