import * as React from 'react';
import { View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { Text40Asap700 } from '../common/typography';
import TextBackground from './TextBackground';
import AppButton from './AppButton';
import colors from '../../constants/colors';
import AppHeader from './AppHeader';

const LandingScreen = () => {
  const navigation = useNavigation<NavigationProp<any, any>>();

  return (
    <View style={{ flex: 1, backgroundColor: colors.twitchPurple }}>
      <AppHeader
        title="Landing Screen"
        bgColor={colors.twitchPurple}
        hamburgerButton
      />
      <View
        style={{
          paddingTop: 100,
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
          There is something for everyone here
        </Text40Asap700>
      </View>
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
          bgColor={colors.twitchDarkPurple}
          labelColor="white"
          onPressButton={() => navigation.navigate('LoginScreen')}
        />
        <AppButton
          buttonLabel="Sign Up"
          labelColor={colors.twitchDarkPurple}
          bgColor="white"
          onPressButton={() => navigation.navigate('SignUpScreen')}
        />
      </View>
    </View>
  );
};

export default LandingScreen;
