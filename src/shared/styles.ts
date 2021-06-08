import styled, { css } from '@emotion/native';
import { Platform } from 'react-native';
import {
  indigo,
  maxBlue,
  textDark,
} from './colors';

// Text Family //
const Bold = 'Roboto-Bold';
const SemiBold = 'Roboto-Medium';
const Regular = 'Roboto-Regular';
const Italic = 'Roboto-Italic';


export const text = css({
  fontSize: 14,
  color: textDark,
  fontFamily: Regular,
  fontWeight: '400',
});


export const mediumText = css([text, {
  fontSize: 16,
  color: textDark,
  fontFamily: SemiBold,
  fontWeight: '600',
}]);

export const boldText = css([text, {
  fontSize: 16,
  color: textDark,
  fontFamily: Bold,
  fontWeight: Platform.OS === 'ios' ? '700' : undefined,
}]);

