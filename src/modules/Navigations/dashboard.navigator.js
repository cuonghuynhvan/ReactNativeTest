import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import ExampleTabContainer from '../ExampleTab/ExampleTab.container';
import DashboardContainer from '../Dashboard/Dashboard.container';

const TabNavigator = createBottomTabNavigator({
  Dashboard: DashboardContainer,
  ExampleTab1: ExampleTabContainer,
  ExampleTab2: ExampleTabContainer,
  ExampleTab3: ExampleTabContainer
});

export default createAppContainer(TabNavigator);
