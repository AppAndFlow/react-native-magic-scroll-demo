import React from 'react';
import { View } from 'react-native';

import { Text40Playfair700 } from '../common/typography';

const WelcomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#a79eab',
        paddingHorizontal: 48,
      }}
    >
      <Text40Playfair700
        style={{
          marginBottom: 300,
          color: 'white',
          marginTop: 76,
          textAlign: 'center',
        }}
      >
        Welcome
      </Text40Playfair700>
    </View>
  );
};

export default WelcomeScreen;
