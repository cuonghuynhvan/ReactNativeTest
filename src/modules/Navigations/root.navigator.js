import { createStackNavigator, createAppContainer } from 'react-navigation';

import DashboardContainer from './dashboard.navigator';

import LoginNavigatorContainer from '../LoginNavigator/LoginNavigator.container';
import LoginContainer from '../Login/Login.container';
import RegisterContainer from '../Register/Register.container';

const RootNavigator = createStackNavigator({
  Root: {
    screen: LoginNavigatorContainer
  },
  Login: {
    screen: LoginContainer
  },
  Register: {
    screen: RegisterContainer
  },
  Dashboard: {
    screen: DashboardContainer
  }
});

export default createAppContainer(RootNavigator);
