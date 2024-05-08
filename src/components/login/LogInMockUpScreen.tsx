import * as React from 'react';
import {
  Dimensions,
  ImageBackground,
  Keyboard,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Text16PlayFair400,
  Text40Playfair700,
  Text60PlayFair900,
} from '../common/typography';
import { MagicScroll } from '@appandflow/rn-magic-scroll';

const LogInMockUpScreen = () => {
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;

  const { chainInput } = MagicScroll.useFormSmartScroll();
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ flex: 1, opacity: 0.8 }}
        resizeMode="center"
        source={{
          uri: 'https://fastly.picsum.photos/id/776/1200/2600.jpg?hmac=39yMlHqPApdcyUu2xf3phU1hMW2yPpvc5Vpk9hCbPYs',
        }}
      >
        <View
          style={{
            position: 'absolute',
            width: screenWidth,
            height: screenHeight,
            backgroundColor: '#00000085',
          }}
        />
        <MagicScroll.ScrollView>
          <Text60PlayFair900
            style={{
              color: 'white',
              textAlign: 'center',
              marginTop: screenHeight * 0.3,
            }}
          >
            Your App
          </Text60PlayFair900>
          <Text16PlayFair400
            style={{
              color: 'white',
              textAlign: 'center',
            }}
          >
            With our magic-scroll solution
          </Text16PlayFair400>

          <MagicScroll.TextInput
            name="Email"
            containerStyle={{
              marginBottom: 16,
              paddingHorizontal: 24,
              paddingTop: 150,
            }}
            textInputProps={{
              returnKeyType: 'next',
              onSubmitEditing: () => chainInput('Password'),
              placeholderTextColor: 'black',
              placeholder: 'Email',
              style: {
                marginBottom: 4,
                backgroundColor: '#ffffff4a',
                height: 50,
                width: '100%',
                borderWidth: 1,
                borderColor: 'white',
                borderRadius: 8,
                padding: 10,
              },
            }}
          />
          <MagicScroll.TextInput
            name="Password"
            containerStyle={{ paddingHorizontal: 24 }}
            textInputProps={{
              returnKeyType: 'done',
              placeholderTextColor: 'black',
              placeholder: 'Password',
              onSubmitEditing: () => Keyboard.dismiss(),
              style: {
                backgroundColor: '#ffffff4a',
                marginBottom: 4,
                height: 50,
                width: '100%',
                borderWidth: 1,
                borderColor: 'white',
                borderRadius: 8,
                padding: 10,
              },
            }}
          />
        </MagicScroll.ScrollView>
        <TouchableOpacity
          style={{
            height: 50,
            width: screenWidth - 48,
            marginHorizontal: 24,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 8,
            backgroundColor: '#ffffff4a',
            position: 'absolute',
            left: 0,
            bottom: 60,
          }}
        >
          <Text16PlayFair400 style={{ fontSize: 20 }}>Login</Text16PlayFair400>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default () => (
  <MagicScroll.SmartScrollView>
    <LogInMockUpScreen />
  </MagicScroll.SmartScrollView>
);
