import {maxBlue, textDark, transparent, white} from '../shared/colors';
import {ROUTES} from '../shared/constants';
import {
  Navigation,
  Options,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';

const BOTTOM_TAB_ICON_INSETS = {top: 0};

class NavigationService {
  public pop = (componentId: string) => {
    Navigation.pop(componentId);
  };

  public pushToScreen = ({
    componentId,
    screen,
    options = {},
  }: {
    componentId: string;
    screen: string;
    options?: Options;
  }) => {
    Navigation.push(componentId, {
      component: {
        name: screen,
        options: options,
      },
    });
  };

  public setRootToHome() {
    Navigation.setDefaultOptions({
      layout: {
        componentBackgroundColor: white,
      },
      statusBar: {
        visible: true,
      },
      topBar: {
        visible: true,
        background: {
          color: white,
          translucent: true,
        },
        elevation: 0,
        backButton: {
          color: maxBlue,
        },
      },
    });

    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: ROUTES.HOME,
              }
            },
          ],
        },
      },
    });
  }

  public openModal = ({
    component,
    modalOptions,
    passProps,
  }: {
    component: string;
    modalOptions?: Options;
    passProps?: any;
  }) => {
    const options = modalOptions ?? {
      modalPresentationStyle: OptionsModalPresentationStyle.pageSheet,
      layout: {
        backgroundColor: transparent,
        componentBackgroundColor: transparent,
      },
      topBar: {
        visible: false,
      },
    };

    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: component,
              options,
              passProps,
            },
          },
        ],
      },
    });
  };

  public closeModal = ({
    component,
    modalOptions,
  }: {
    component: string;
    modalOptions?: Options;
  }) => {
    Navigation.dismissModal(component, modalOptions);
  };
}

export default new NavigationService();
