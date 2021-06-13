import React from 'react';
import styled, {css} from '@emotion/native';
import {View, Text, SectionList, TextInput} from 'react-native';
import {text, subHeader, boldText} from '../shared/styles';
import {FULL_BODY_DAY1, FULL_BODY_DAY2, FULL_BODY_DAY3} from '../shared/data';
import {indigo, maxBlue, white} from '../shared/colors';

interface Props {
  workout: any;
}
interface Exercise {
  item: any;
}

const DATA = [FULL_BODY_DAY1, FULL_BODY_DAY2, FULL_BODY_DAY3];

const headers = ['Name', 'Reps', 'RPE', '1', '2', '3', 'Notes'];

console.log({DATA});
const Item = ({item}: Exercise) => (
  <Text style={subHeaderStyle}>{item.name}</Text>
);

const FullBody = ({workout}: Props) => {
  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => <Item item={item} />}
      renderSectionHeader={({section: {title}}: {section: {title: string}}) => (
        <>
          <Text style={liftHeaderStyle}>{title}</Text>
          <ViewRow>
            {headers.map((header, idx) => (
              <Text key={idx} style={subHeaderStyle}>
                {header}
              </Text>
            ))}
          </ViewRow>
        </>
      )}
    />
  );
};

export default FullBody;

const ViewRow = styled.View({
  flexDirection: 'row',
  backgroundColor: indigo,
});

const liftHeaderStyle = css([
  subHeader,
  {
    fontSize: 20,
    padding: 8,
    textAlign: 'center',
  },
]);

const subHeaderStyle = css([
  subHeader,
  {
    padding: 8,
    color: white,
  },
]);

const LiftRow = styled.View({});
