import React from 'react';
import {TouchableOpacity, Text, Platform} from 'react-native';
import {css} from '@emotion/native';
import { maxBlue } from '../shared/colors';

interface Props {
  componentId: string;
  goToExercises?: () => void;
}

const ExercisesButton = ({componentId, goToExercises}: Props) => {
  return (
    <TouchableOpacity onPress={goToExercises}>
      <Text style={exercisesButtonStyle}>
        Log In
      </Text>
    </TouchableOpacity>
  );
};

export default ExercisesButton;

const exercisesButtonStyle = css({
  color: maxBlue,
  fontSize: 18,
  lineHeight: 24,
  marginLeft: Platform.OS === 'android' ? 12 : 0,
});
