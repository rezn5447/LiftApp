import React from 'react';
import { textDark } from '../shared/colors';
import {
  StyleSheet,
  StyleProp,
  TextStyle,
  Platform,
  Text as RNText,
} from 'react-native';

// Component
// ----------------------------------------------------------------------------
interface Props {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  font?: FontWeight;
  allowFontScaling?: boolean;
  maxFontSizeMultiplier?: number;
  animation?: any;
  delay?: number;
}

const Text: React.FC<Props> = ({
  children,
  style,
  font,
  allowFontScaling,
  maxFontSizeMultiplier,
  animation,
  delay,
  ...rest
}: Props) => {
  return (
    <RNText
      style={[styles.text, font && styles[font], style]}
      allowFontScaling={allowFontScaling}
      maxFontSizeMultiplier={maxFontSizeMultiplier}
      {...rest}
    >
      {children}
    </RNText>
  );
};

export enum FontWeight {
  Regular = 'NunitoSans-Regular',
  Italic = 'NunitoSans-Italic',
  SemiBold = 'NunitoSans-Semi-Bold',
  Bold = 'NunitoSans-Bold',
  ExtraBold = 'NunitoSans-Extra-Bold',
}

Text.defaultProps = {
  style: [],
  font: FontWeight.Regular,
  allowFontScaling: false,
};

// Styles
// ----------------------------------------------------------------------------

const Bold = 'NunitoSans-Bold';
const ExtraBold = 'NunitoSans-ExtraBold';
const SemiBold = 'NunitoSans-SemiBold';
const Regular = 'NunitoSans-Regular';
const Italic = 'NunitoSans-Italic';

const styles = StyleSheet.create({
  // fonts
  // eslint-disable-next-line react-native/no-unused-styles
  [FontWeight.Regular]: {
    fontFamily: Regular,
    fontWeight: '400',
  },
  [FontWeight.Italic]: {
    fontFamily: Italic,
    fontWeight: '400',
  },
  // eslint-disable-next-line react-native/no-unused-styles
  [FontWeight.SemiBold]: {
    fontFamily: SemiBold,
    fontWeight: '600',
  },
  [FontWeight.Bold]: {
    fontFamily: Bold,
    fontWeight: Platform.OS === 'ios' ? '700' : undefined,
  },
  [FontWeight.ExtraBold]: {
    fontFamily: ExtraBold,
    fontWeight: '800',
  },
  //
  text: {
    fontSize: 16,
    color: textDark,
  },
});

export default Text;
