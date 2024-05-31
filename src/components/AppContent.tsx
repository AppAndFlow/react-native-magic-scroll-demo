import * as React from 'react';

import AppNavigator from './AppNavigator';
import BottomSheet from './common/BottomSheet';
import { View } from 'react-native';

/**
 * This is where we add anything related to the content of the App
 * SplashScreen, Modal views etc...
 */
const AppContent = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppNavigator />
      <BottomSheet />
    </View>
  );
};

export default AppContent;
