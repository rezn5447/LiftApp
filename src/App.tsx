import {Navigation} from 'react-native-navigation';
import NavigationService from './services/Navigation/Navigation.service';
import registerScreens from './screens';
import {LogBox} from 'react-native';

LogBox.ignoreAllLogs();

export default async function startApp() {
  registerScreens();
  Navigation.events().registerAppLaunchedListener(() => {
    NavigationService.setRootBasedOnUser();
  });
}
