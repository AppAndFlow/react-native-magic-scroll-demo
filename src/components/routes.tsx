import { StackNavigationOptions } from '@react-navigation/stack';
import React from 'react';

import WelcomeScreen from './welcome/WelcomeScreen';
import FormScreen from './form/FormScreen';
import LogInMockUpScreen from './login/LogInMockUpScreen';

export const routes = {
  WelcomeScreen: {
    name: 'WelcomeScreen',
    screen: WelcomeScreen,
  },
  FormScreen: {
    name: 'FormScreen',
    screen: FormScreen,
    screenNavigationOptions: {
      gestureEnabled: true,
    },
  },
  LogInMockUpScreen: {
    name: 'LogInMockUpScreen',
    screen: LogInMockUpScreen,
    screenNavigationOptions: {
      gestureEnabled: true,
    },
  },
} as Record<
  string,
  {
    name: string;
    screen: React.ComponentType<any>;
    screenNavigationOptions?: StackNavigationOptions;
  }
>;
