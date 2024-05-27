import React from 'react';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { Box } from 'react-native-design-utility';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { configure } from 'mobx';

import { fontsMap } from '../constants/fonts';
import { rootStore } from '../stores';
import AppContent from './AppContent';

configure({
  enforceActions: 'never',
});

export const StoreContext = React.createContext<typeof rootStore>(rootStore);

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
    <StoreContext.Provider value={rootStore}>
      <NavigationContainer>
        <GestureHandlerRootView>
          <AppContent />
        </GestureHandlerRootView>
      </NavigationContainer>
    </StoreContext.Provider>
  ) : (
    <Box bg="#103829" f={1} />
  );
};

export default () => <App />;
