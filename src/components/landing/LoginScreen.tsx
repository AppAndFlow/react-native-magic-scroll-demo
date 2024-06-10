import * as React from 'react';
import { Alert, Dimensions, Keyboard, View } from 'react-native';
import { MagicScroll } from '@appandflow/react-native-magic-scroll';

import { Text16Asap400 } from '../common/typography';
import IndependantTI from './IndependantTI';
import AppButton from './AppButton';
import AppHeader from './AppHeader';
import colors from '../../constants/colors';

const LoginScreen = () => {
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;

  const { chainInput } = MagicScroll.useFormSmartScroll();

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const buttonEnabled = () => {
    if (username && password !== '') {
      return true;
    } else {
      return false;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <AppHeader title="Log In" bgColor="black" backButton borderBottom />

      <MagicScroll.ScrollView
        scollViewProps={{
          contentContainerStyle: {
            paddingHorizontal: 20,
            paddingTop: screenHeight * 0.33,
          },
        }}
      >
        <IndependantTI
          onSubmit={() => chainInput('Password')}
          name="Username"
          label="Username"
          returnKeyType="next"
          tiProps={{
            value: username,
            onChangeText: (val) => setUsername(val),
            textContentType: 'username',
          }}
        />
        <IndependantTI
          name="Password"
          label="Password"
          tiProps={{
            value: password,
            onChangeText: (val) => setPassword(val),
            secureTextEntry: true,
            textContentType: 'password',
          }}
          returnKeyType="done"
          onSubmit={Keyboard.dismiss}
        />

        <Text16Asap400
          style={{
            color: colors.twitchLightPurple,

            fontSize: 18,
          }}
        >
          Trouble logging in?
        </Text16Asap400>
      </MagicScroll.ScrollView>

      <AppButton
        style={{
          width: screenWidth - 40,
          alignSelf: 'center',
          position: 'absolute',
          bottom: screenHeight * 0.11,
        }}
        onPressButton={
          buttonEnabled()
            ? () => Alert.alert('You have successfully logged in!')
            : () => null
        }
        buttonLabel="Log In"
        labelColor={buttonEnabled() ? 'white' : '#bdbaba'}
        bgColor={buttonEnabled() ? colors.twitchPurple : colors.twitchGrey}
      />
    </View>
  );
};

export default LoginScreen;
