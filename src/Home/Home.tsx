import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {text, boldText} from '../shared/styles';
import {FULL_BODY_DAY1, FULL_BODY_DAY2, FULL_BODY_DAY3} from '../shared/data';
import FullBody from '../components/FullBody';

interface Props {}

const Home = ({}: Props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={text}>Full Body Workout</Text>
      <FullBody workout={FULL_BODY_DAY1} />
    </View>
  );
};

export default Home;


