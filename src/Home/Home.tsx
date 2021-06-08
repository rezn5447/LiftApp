import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {text, boldText} from '../shared/styles';

interface Props {}

const Home = ({}: Props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={text}>Tracking</Text>
    </View>
  );
};

export default Home;
