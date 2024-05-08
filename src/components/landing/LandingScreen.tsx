import * as React from 'react';
import { Dimensions, View } from 'react-native';
import { Text40Playfair700 } from '../common/typography';

const LandingScreen = () => {
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;
  return (
    <View
      style={{
        flex: 1,
        height: screenHeight,
        width: screenWidth,
        backgroundColor: '#874BF6',
      }}
    ></View>
  );
};

export default LandingScreen;
