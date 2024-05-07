import { StackNavigationOptions } from '@react-navigation/stack';
import React from 'react';

import WelcomeScreen from './welcome/WelcomeScreen';

export const routes = {
  WelcomeScreen: {
    name: 'WelcomeScreen',
    screen: WelcomeScreen,
  },
} as Record<
  string,
  {
    name: string;
    screen: React.ComponentType<any>;
    screenNavigationOptions?: StackNavigationOptions;
  }
>;
