import React from 'react';
import {TouchableOpacity, Text, Platform} from 'react-native';
import {css} from '@emotion/native';
import {maxBlue} from '../shared/colors';
import NavigationService from '../Navigation/NavigationService';

interface Props {
  componentId: string;
  goToTracking?: () => void;
}

const TrackingButton = ({componentId, goToTracking}: Props) => {
  return (
    <TouchableOpacity onPress={goToTracking}>
      <Text style={trackingButtonStyle}>Tracking</Text>
    </TouchableOpacity>
  );
};

export default TrackingButton;

const trackingButtonStyle = css({
  color: maxBlue,
  fontSize: 18,
  lineHeight: 24,
  marginRight: Platform.OS === 'android' ? 24 : 0,
});
