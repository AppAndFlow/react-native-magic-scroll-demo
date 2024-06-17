import React from 'react';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { configure } from 'mobx';
import { View } from 'react-native';

import { fontsMap } from '../constants/fonts';
import { StoreContext, rootStore } from '../stores';
import AppContent from './AppContent';
import { SafeAreaProvider } from 'react-native-safe-area-context';

configure({
  enforceActions: 'never',
});

/**
 * This is the app entry Point.
 */
const App = () => {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    loadResources();
  }, []);

  const loadResources = async () => {
    await Promise.all([
      Font.loadAsync({
        ...fontsMap,
      }),
    ]);
    setReady(true);
    await SplashScreen.hideAsync();
  };

  return ready ? (
    <SafeAreaProvider>
      <StoreContext.Provider value={rootStore}>
        <NavigationContainer>
          <GestureHandlerRootView>
            <AppContent />
          </GestureHandlerRootView>
        </NavigationContainer>
      </StoreContext.Provider>
    </SafeAreaProvider>
  ) : (
    <View style={{ flex: 1 }} />
  );
};

export default () => <App />;
