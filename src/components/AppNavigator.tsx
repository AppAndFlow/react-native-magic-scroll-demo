import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LandingScreen from './landing/LandingScreen';
import LoginScreen from './landing/LoginScreen';
import SignUpScreen from './landing/signUp/SignUpScreen';
import ShopCheckOutScreen from './shop/ShopCheckOutScreen';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="LandingScreen"
      screenOptions={{
        headerShown: false,
        drawerContentContainerStyle: {
          backgroundColor: 'black',
          height: '100%',
        },
        drawerLabelStyle: {
          color: 'white',
        },
      }}
    >
      <Drawer.Screen name="Authentication" component={TwitchExample} />
      <Drawer.Screen name="Checkout" component={ShopExample} />
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
