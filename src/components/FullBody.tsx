import React from 'react';
import styled, {css} from '@emotion/native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {View, Text, SectionList,SafeAreaView , TextInput, ScrollView} from 'react-native';
import {text, subHeader, boldText, header} from '../shared/styles';
import {indigo, maxBlue, white} from '../shared/colors';

interface Props {
  workout: any;
}
interface Exercise {
  item: any;
}



const headers = ['Name', 'Reps', 'RPE', '1', '2', '3', 'Notes'];

const Item = ({item}: Exercise) => (
 <LiftRow>
  <BouncyCheckbox onPress={() => {}} />
  <Text style={text}>{item.name}</Text>
   </LiftRow>
  );
  
  const ExerciseList = ({workout}: Props) => {
    
    return (
      <View>
        <SectionList
          sections={workout.DATA}
          keyExtractor={(item, index) => item + index}
          ListHeaderComponent={<Text style={header}>{workout.name}</Text>}
          renderItem={({item}) => <Item item={item} />}
          renderSectionHeader={({
            section: {title},
          }: {
            section: {title: string};
          }) => (
            <LiftItemRow>
              
              <Text style={liftHeaderStyle}>{title}</Text>
            </LiftItemRow>
          )}
        />
      </View>
    );
};

export default ExerciseList;

const LiftItemRow = styled.View({
  padding: 5,
});

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

const LiftRow = styled.View({
  flexDirection: 'row',
  margin: 10,
  marginLeft: 20,
});
