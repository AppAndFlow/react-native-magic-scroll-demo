import * as React from 'react';
import { Box } from 'react-native-design-utility';

import AppNavigator from './AppNavigator';
import BottomSheet from './common/BottomSheet';

/**
 * This is where we add anything related to the content of the App
 * SplashScreen, Modal views etc...
 */
const AppContent = () => {
  const [isDataLoading, setIsDataLoading] = React.useState(true);

  React.useEffect(() => {
    const maybeAuthUser = async () => {
      setIsDataLoading(false);
    };
    maybeAuthUser();
  }, []);

  return (
    <Box flex={1}>
      {!isDataLoading && <AppNavigator />}
      <BottomSheet />
    </Box>
  );
};

export default AppContent;
