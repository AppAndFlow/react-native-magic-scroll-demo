import { NavigationProp, useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Dimensions, Keyboard, TouchableOpacity, View } from 'react-native';
import IndependantTI from './IndependantTI';
import { MagicScroll } from '@appandflow/rn-magic-scroll';
import { Entypo } from '@expo/vector-icons';
import { Text16Asap400, Text18Asap400 } from '../common/typography';
import { FontAwesome5 } from '@expo/vector-icons';

const SignUpScreen = () => {
  const navigation = useNavigation<NavigationProp<any, any>>();
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;

  const { chainInput } = MagicScroll.useFormSmartScroll();
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
            marginLeft: screenWidth * 0.33,
            fontSize: 20,
            marginBottom: 4,
          }}
        >
          Sign Up
        </Text18Asap400>
      </View>
      <MagicScroll.ScrollView>
        <IndependantTI
          bottomText="Include your country code and use a device you trust."
          label="Phone Number"
          name="PhoneNumber"
          onSubmit={() => chainInput('Username')}
          returnKeyType="next"
          style={{ marginTop: screenHeight * 0.16 }}
          tiProps={{
            keyboardType: 'numbers-and-punctuation',
            placeholder: '+1',
            placeholderTextColor: 'white',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 20,
            alignItems: 'center',
            gap: 10,
            marginTop: -5,
            marginBottom: 10,
          }}
        >
          <FontAwesome5 name="envelope" size={24} color="#bc9df5" />
          <Text18Asap400 style={{ color: '#bc9df5' }}>
            Use email instead
          </Text18Asap400>
        </View>
        <IndependantTI
          tiProps={{
            selectionHandleColor: '#874BF6',
            selectionColor: '#874BF6',
          }}
          bottomText="This is the name people will know you by on this App. You can always change it later."
          label="Username"
          name="Username"
          returnKeyType="next"
          onSubmit={() => chainInput('Password')}
        />
        <IndependantTI
          bottomText="Strong passwords include a mix of lower case latters, upper case letters, numbers and special characters."
          label="Password"
          name="Password"
          returnKeyType="next"
          onSubmit={() => chainInput('DateOfBirth')}
        />
        <IndependantTI
          label="Date of Birth"
          name="DateOfBirth"
          returnKeyType="done"
          onSubmit={Keyboard.dismiss}
          tiProps={{ keyboardType: 'numbers-and-punctuation' }}
        />
      </MagicScroll.ScrollView>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingHorizontal: 20,
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginBottom: 160,
        }}
      >
        <Text16Asap400 style={{ fontSize: 12, color: 'white' }}>
          By clicking Sign Up, you are agreeing to this App's{' '}
        </Text16Asap400>
        <Text16Asap400 style={{ fontSize: 12, color: '#bc9df5' }}>
          Terms of Service{' '}
        </Text16Asap400>
        <Text16Asap400 style={{ fontSize: 12, color: 'white' }}>
          and are acknowledging our{' '}
        </Text16Asap400>
        <Text16Asap400 style={{ fontSize: 12, color: '#bc9df5' }}>
          Privacy Notice{' '}
        </Text16Asap400>
        <Text16Asap400 style={{ fontSize: 12, color: 'white' }}>
          applies.
        </Text16Asap400>
        <TouchableOpacity
          style={{
            height: 50,
            width: screenWidth - 40,
            marginTop: 16,

            backgroundColor: '#474747',
            borderRadius: 6,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text18Asap400 style={{ color: '#bdbaba' }}>Sign Up</Text18Asap400>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default () => (
  <MagicScroll.SmartScrollView>
    <SignUpScreen />
  </MagicScroll.SmartScrollView>
);
