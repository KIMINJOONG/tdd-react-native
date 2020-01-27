import React, {useCallback, useState} from 'react';
import {View, TextInput, Button} from 'react-native';

const AddToDo = props => {
  const [text, setText] = useState('');
  const onChangeText = useCallback(testText => {
    setText(testText);
  }, []);
  const onPress = useCallback(() => {
    const {onAdded} = props;
    onAdded(text);
  }, [props, text]);
  return (
    <View>
      <TextInput onChangeText={onChangeText} />
      <Button title="A" onPress={onPress} />
    </View>
  );
};

export default AddToDo;
