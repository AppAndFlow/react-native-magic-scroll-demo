import { NavigationProp, useNavigation } from '@react-navigation/native';
import * as React from 'react';
import {
  Alert,
  Dimensions,
  Keyboard,
  TouchableOpacity,
  View,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MagicScroll } from '@appandflow/rn-magic-scroll';

import { Text16Asap400, Text18Asap400 } from '../common/typography';
import IndependantTI from './IndependantTI';
import AppButton from './AppButton';

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp<any, any>>();
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
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 10,
          paddingTop: 64,
          alignItems: 'center',
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
        <Text18Asap400
          style={{
            textAlign: 'center',
            color: 'white',
            marginLeft: screenWidth * 0.34,
            fontSize: 20,
            marginBottom: 4,
          }}
        >
          Log In
        </Text18Asap400>
      </View>
      <MagicScroll.ScrollView
        scollViewProps={{ contentContainerStyle: { paddingHorizontal: 20 } }}
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
          style={{ marginTop: screenHeight * 0.33 }}
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
          onSubmit={() => Keyboard.dismiss()}
        />

        <Text16Asap400
          style={{
            color: '#bc9df5',

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
        bgColor={buttonEnabled() ? '#874BF6' : '#474747'}
      />
    </View>
  );
};

export default () => (
  <MagicScroll.SmartScrollView>
    <LoginScreen />
  </MagicScroll.SmartScrollView>
);
