import {Navigation} from 'react-native-navigation';
import NavigationService from './Navigation/NavigationService';
import registerScreens from './screens';
import {LogBox} from 'react-native';

LogBox.ignoreAllLogs();

export default async function startApp() {
  registerScreens();
  Navigation.events().registerAppLaunchedListener(() => {
    NavigationService.setRootToHome();
  });
}
