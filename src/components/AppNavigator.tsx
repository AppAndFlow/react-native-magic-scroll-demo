import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LandingScreen from './landing/LandingScreen';
import WelcomeScreen from './welcome/WelcomeScreen';
import LoginScreen from './landing/LoginScreen';
import SignUpScreen from './landing/signUp/SignUpScreen';
import ShopCheckOutScreen from './shop/ShopCheckOutScreen';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Welcome" component={WelcomeScreen} />
      <Drawer.Screen name="Twitch" component={TwitchExample} />
      <Drawer.Screen name="Shop" component={ShopExample} />
    </Drawer.Navigator>
  );
};

const TwitchExampleStack = createStackNavigator();

const TwitchExample = () => {
  return (
    <TwitchExampleStack.Navigator screenOptions={{ headerShown: false }}>
      <TwitchExampleStack.Screen
        name="LandingScreen"
        component={LandingScreen}
      />
      <TwitchExampleStack.Screen name="LoginScreen" component={LoginScreen} />
      <TwitchExampleStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </TwitchExampleStack.Navigator>
  );
};

const ShopExampleStack = createStackNavigator();

const ShopExample = () => {
  return (
    <ShopExampleStack.Navigator screenOptions={{ headerShown: false }}>
      <ShopExampleStack.Screen
        name="ShopCheckOutScreen"
        component={ShopCheckOutScreen}
      />
    </ShopExampleStack.Navigator>
  );
};

export default AppNavigator;
