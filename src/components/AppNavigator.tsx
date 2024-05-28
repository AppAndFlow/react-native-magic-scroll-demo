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
      initialRouteName="Landing Screen"
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
      <Drawer.Screen name="Landing Screen" component={TwitchExample} />
      <Drawer.Screen name="Log In" component={LoginScreen} />
      <Drawer.Screen name="Sign Up" component={SignUpScreen} />
      <Drawer.Screen name="Check Out" component={ShopExample} />
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
