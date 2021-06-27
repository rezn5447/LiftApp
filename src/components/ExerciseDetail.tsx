import React from 'react';
import {TouchableOpacity, Text, Platform} from 'react-native';
import {css} from '@emotion/native';
import {maxBlue, white} from '../shared/colors';
import {Exercise} from '../shared/types';
import {HEADERS} from '../shared/data';

interface Props {
  componentId: string;
  exercise: Exercise;
}

const ExerciseDetail = ({componentId, exercise}: Props) => {
  return (
    <TouchableOpacity>
      <Text style={exerciseDetailStyle}>Videos</Text>
    </TouchableOpacity>
  );
};

export default ExerciseDetail;

const exerciseDetailStyle = css({
  color: maxBlue,
  fontSize: 18,
  lineHeight: 24,
  marginRight: Platform.OS === 'android' ? 24 : 0,
});
