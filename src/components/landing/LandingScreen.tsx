import * as React from 'react';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import { Text18Asap400, Text40Asap700 } from '../common/typography';
import TextBackground from './TextBackground';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import AppButton from './AppButton';

const LandingScreen = () => {
  const navigation = useNavigation<NavigationProp<any, any>>();
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;
  return (
    <View
      style={{
        flex: 1,
        height: screenHeight,
        width: screenWidth,
        backgroundColor: '#874BF6',
        paddingTop: 140,
      }}
    >
      <TextBackground />
      <Text40Asap700
        numberOfLines={2}
        style={{
          marginLeft: 64,
          marginRight: 20,
          fontSize: 34,
          textAlign: 'left',
        }}
      >
        There's something for everyone here
      </Text40Asap700>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          justifyContent: 'space-between',
          gap: 20,
          position: 'absolute',
          bottom: 60,
        }}
      >
        <AppButton
          buttonLabel="Login"
          bgColor="#6235b7"
          labelColor="white"
          onPressButton={() => navigation.navigate('LoginScreen')}
        />
        <AppButton
          buttonLabel="Sign Up"
          labelColor="#6235b7"
          bgColor="white"
          onPressButton={() => navigation.navigate('SignUpScreen')}
        />
      </View>
    </View>
  );
};

export default LandingScreen;
