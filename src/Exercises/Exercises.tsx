import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {text} from '../shared/styles';

interface Props {}

const Exercises = ({}: Props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={text}>Hello world</Text>
    </View>
  );
};

export default Exercises;
