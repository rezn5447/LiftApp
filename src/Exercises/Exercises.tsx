import React from 'react';
import styled, {css} from '@emotion/native';
import {View, Text, TextInput, TouchableOpacity, Linking, ScrollView} from 'react-native';
import {headerText, text} from '../shared/styles';
import {videos} from '../shared/data';
import { white } from '../shared/colors';

interface Props {}

// Make record async storage and just make an object 
// out of the saved sets reps
const Exercises = ({}: Props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text style={headerText}>Video Links</Text>
      <ScrollView>
        {videos.map((video, idx) => (
          <TouchableOpacity
            key={idx}
            onPress={() => Linking.openURL(video.video)}
            style={linkStyle}>
            <Text>{video.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Exercises;

const linkStyle = css([
  text,
  {
    padding: 5,
    color: white,
  },
]);