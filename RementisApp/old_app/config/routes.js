import React from 'react';
import { StackNavigator } from 'react-navigation';

import ActivityFeed from '../screens/ActivityFeed';
import HomeScreen from '../screens/HomeScreen';

const Routes = StackNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
  ActivityFeed: {
    screen: ActivityFeed,
  },
});

export default Routes;