import React from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import {text, boldText, header} from '../shared/styles';
import {FULL_BODY_DAY1, FULL_BODY_DAY2, FULL_BODY_DAY3} from '../shared/data';
import FullBody from '../components/FullBody';
import {ROUTES} from '../shared/constants';
import NavigationService from '../Navigation/NavigationService';
import {Navigation} from 'react-native-navigation';

interface Props {
  componentId: string;
}

const DATA = [FULL_BODY_DAY1, FULL_BODY_DAY2, FULL_BODY_DAY3];

const Home = ({componentId}: Props) => {
  Navigation.mergeOptions(componentId, {
    topBar: {
      noBorder: true,
      rightButtons: [
        {
          id: 'exercises_button',
          component: {
            name: ROUTES.EXCERCISE_BUTTON,
            passProps: {
              goToExercises: () => {
                NavigationService.pushToScreen({
                  componentId,
                  screen: ROUTES.VIDEOS,
                });
              },
            },
          },
        },
      ],
    },
  });

  return (
    <FullBody workout={{name: 'Full Body', DATA: DATA}} />
  );
};

export default Home;
