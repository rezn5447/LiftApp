import React from 'react';
import {Navigation} from 'react-native-navigation';
import Toast from 'react-native-toast-message';
import {ROUTES} from 'shared/constants';
import {
  AccountConfirm,
  CreateAccount,
  ForgotPassword,
  Login,
} from 'modules/auth/screens';
import Profile from 'modules/profile/screens/Profile';

export function registerScreen<P>(
  name: string,
  Component: React.ComponentType<P>,
) {
  Navigation.registerComponent(name, () => Component);
}

export default function registerScreens() {
  const screensMap: Array<[string, any]> = [
    [ROUTES.APP, CreateAccount],
  ];

  for (const [name, Component] of screensMap) {
    registerScreen(name, Component);
  }
}
