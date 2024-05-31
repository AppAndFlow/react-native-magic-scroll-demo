import * as React from 'react';
import { View } from 'react-native';

import AppNavigator from './AppNavigator';
import BottomSheet from './common/BottomSheet';

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
