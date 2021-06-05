import { textDark } from '../shared/colors';
import { ROUTES } from 'shared/constants';
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
                      name: ROUTES.ORDERS,
                      options: {
                        topBar: {
                          noBorder: true,
                          drawBehind: true,
                          background: {
                            color: 'transparent',
                          },
                          rightButtons: [
                            {
                              id: 'notification_bell',
                              component: {
                                name: ROUTES.NOTIFICATION_BELL,
                                passProps: orderProps,
                              },
                            },
                          ],
                        },
                        bottomTab: {
                          icon: require('static/assets/images/menu/order.png'),
                          selectedIcon: require('static/assets/images/menu/orderActive.png'),
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
                      name: ROUTES.SPECIALS,
                      options: {
                        topBar: {
                          noBorder: true,
                        },
                        bottomTab: {
                          icon: require('static/assets/images/menu/specials.png'),
                          selectedIcon: require('static/assets/images/menu/specialsActive.png'),
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
                      name: ROUTES.SUPPORT,
                      options: {
                        topBar: {
                          noBorder: true,
                        },
                        bottomTab: {
                          icon: require('static/assets/images/menu/support.png'),
                          selectedIcon: require('static/assets/images/menu/supportActive.png'),
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
                      name: ROUTES.PROFILE,
                      options: {
                        topBar: {
                          noBorder: true,
                        },
                        bottomTab: {
                          icon: require('static/assets/images/menu/account.png'),
                          selectedIcon: require('static/assets/images/menu/accountActive.png'),
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
                      name: ROUTES.MORE,
                      options: {
                        topBar: {
                          noBorder: true,
                        },
                        bottomTab: {
                          icon: require('static/assets/images/menu/more.png'),
                          selectedIcon: require('static/assets/images/menu/moreActive.png'),
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
