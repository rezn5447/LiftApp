import React from 'react';
import {Navigation} from 'react-native-navigation';
import {ROUTES} from './shared/constants';
import Home from './Home/Home';
import Exercises from './Exercises/Exercises';
import ExercisesButton from './components/ExercisesButton';

export function registerScreen<P>(
  name: string,
  Component: React.ComponentType<P>,
) {
  Navigation.registerComponent(name, () => Component);
}

export default function registerScreens() {
  const screensMap: Array<[string, any]> = [
    [ROUTES.HOME, Home],
    [ROUTES.VIDEOS, Exercises],
    [ROUTES.EXCERCISE_BUTTON, ExercisesButton],
  ];

  for (const [name, Component] of screensMap) {
    registerScreen(name, Component);
  }
}
