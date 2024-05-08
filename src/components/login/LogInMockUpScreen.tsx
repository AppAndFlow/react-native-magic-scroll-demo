import * as React from 'react';
import { ImageBackground, View } from 'react-native';
import { Text40Playfair700 } from '../common/typography';

const LogInMockUpScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ flex: 1 }}
        resizeMode="center"
        source={{
          uri: 'https://fastly.picsum.photos/id/776/1200/2600.jpg?hmac=39yMlHqPApdcyUu2xf3phU1hMW2yPpvc5Vpk9hCbPYs',
        }}
      >
        <View>
          <Text40Playfair700>Login</Text40Playfair700>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LogInMockUpScreen;
