import React from 'react';
import {TouchableOpacity, Text, Platform} from 'react-native';
import {css} from '@emotion/native';
import {maxBlue} from '../shared/colors';
import NavigationService from '../Navigation/NavigationService';

interface Props {
  componentId: string;
  goToStats?: () => void;
}

const StatsButton = ({componentId, goToStats}: Props) => {
  return (
    <TouchableOpacity onPress={goToStats}>
      <Text style={statsButtonStyle}>Stats</Text>
    </TouchableOpacity>
  );
};

export default StatsButton;

const statsButtonStyle = css({
  color: maxBlue,
  fontSize: 18,
  lineHeight: 24,
  marginRight: Platform.OS === 'android' ? 24 : 0,
});
