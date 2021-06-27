import React from 'react';
import {TouchableOpacity, Text, Platform} from 'react-native';
import {css} from '@emotion/native';
import {maxBlue, white} from '../shared/colors';
import NavigationService from '../Navigation/NavigationService';
import {ROUTES} from '../shared/constants';

interface Props {
  componentId: string;
  goToExercises: () => void;
}

const ExercisesButton = ({componentId, goToExercises}: Props) => {
  return (
    <TouchableOpacity onPress={goToExercises}>
      <Text style={exercisesButtonStyle}>Videos</Text>
    </TouchableOpacity>
  );
};

export default ExercisesButton;

const exercisesButtonStyle = css({
  color: maxBlue,
  fontSize: 18,
  lineHeight: 24,
  marginRight: Platform.OS === 'android' ? 24 : 0,
});
