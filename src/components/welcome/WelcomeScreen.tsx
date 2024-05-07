import React from 'react';
import { Box } from 'react-native-design-utility';
import { observer } from 'mobx-react-lite';

import { TextNormal } from '../common/typography';

/**
 * You will mostlikely delete this screen.
 * See routes.tsx to add new screens.
 */
const WelcomeScreen = observer(() => {
  return (
    <Box f={1} justify="center" align="center" bg="blue">
      <TextNormal>Welcome</TextNormal>
    </Box>
  );
});

export default WelcomeScreen;
