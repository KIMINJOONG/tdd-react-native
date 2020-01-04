/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';
import {shallow} from 'enzyme';
import {Text} from 'react-native';

describe('App', () => {
  const wrapper = shallow(<App />);
  it('is Text visible?', () => {
    expect(wrapper.find('Text').contains('ToDo TDD')).toBe(true);
  });

  it('is AddToDo visible?', () => {
    expect(wrapper.find('AddToDo')).toHaveLength(1);
  });

  it('is TodoList visible?', () => {
    expect(wrapper.find('ToDoList')).toHaveLength(1);
  });
});
