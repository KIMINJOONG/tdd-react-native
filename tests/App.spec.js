/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {shallow} from 'enzyme';
import {Text} from 'react-native';

describe('Jest', () => {
  it('is it Working', () => {
    const a = 1;
    expect(a + 1).toBe(2);
  });
});

describe('Enzyme', () => {
  it('is it working', () => {
    const text = 'some text';
    const wrapper = shallow(<Text>{text}</Text>);
    expect(wrapper.text()).toBe(text);
  });
});
