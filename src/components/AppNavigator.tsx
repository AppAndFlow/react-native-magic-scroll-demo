import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { routes } from './routes';

const RootStack = createStackNavigator();

const AppNavigator = () => {
  const initialRouteName = routes.WelcomeScreen.name;

  return (
    <RootStack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      {Object.keys(routes).map((key) => {
        const { name, screen, screenNavigationOptions } =
          routes[key as keyof typeof routes];
        return (
          <RootStack.Screen
            name={name}
            component={screen}
            options={screenNavigationOptions}
            key={name}
          />
        );
      })}
    </RootStack.Navigator>
  );
};

export default AppNavigator;
