import React from 'react';
import styled, {css} from '@emotion/native';
import {View, Text, TextInput} from 'react-native';
import {text, boldText} from '../shared/styles';
import {FULL_BODY_DAY1, FULL_BODY_DAY2, FULL_BODY_DAY3} from '../shared/data';
import {indigo, maxBlue, white} from '../shared/colors';

interface Props {
  workout: any;
}

const headers = ['Name', 'Sets', 'Reps', 'RPE', '1', '2', '3', 'Notes'];

const FullBody = ({workout}: Props) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ViewRow>
        {headers.map((header, idx) => (
          <Text key={idx} style={textStyle}>
            {header}
          </Text>
        ))}
      </ViewRow>
    </View>
  );
};

export default FullBody;

const ViewRow = styled.View({
  flexDirection: 'row',
  backgroundColor: indigo,
});

const textStyle = css([
  text,
  {
    padding: 5,
    color: white,
  },
]);
