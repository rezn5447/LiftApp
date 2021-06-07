import { textDark, transparent, white } from '../shared/colors';
import { ROUTES } from '../shared/constants';
import {
  Navigation,
  Options,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';

const BOTTOM_TAB_ICON_INSETS = { top: 0 };

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

  public async setRootToApp(index?: number) {
    Navigation.setDefaultOptions({
      bottomTabs: {
        backgroundColor: white,
        currentTabIndex: index ?? 0,
        borderColor: transparent,
      },
      layout: {
        componentBackgroundColor: white,
      },
      statusBar: {
        visible: false,
      },
    });

    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      name: ROUTES.HOME,
                      options: {
                        topBar: {
                          noBorder: true,
                          drawBehind: true,
                          background: {
                            color: 'transparent',
                          },
                          rightButtons: [],
                        },
                        bottomTab: {
                          icon: require('src/images/dumbbell.png'),
                          selectedIcon: require('src/images/dumbbell.png'),
                          iconInsets: BOTTOM_TAB_ICON_INSETS,
                        },
                      },
                    },
                  },
                ],
              },
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: ROUTES.VIDEOS,
                      options: {
                        topBar: {
                          noBorder: true,
                        },
                        bottomTab: {
                          icon: require('src/images/formVid.png'),
                          selectedIcon: require('src/images/formVid.png'),
                          iconInsets: BOTTOM_TAB_ICON_INSETS,
                        },
                      },
                    },
                  },
                ],
              },
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
