import { NavigationProp, useNavigation } from '@react-navigation/native';
import * as React from 'react';
import {
  Button,
  Dimensions,
  InputAccessoryView,
  Keyboard,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import IndependantTI from './IndependantTI';
import { MagicScroll } from '@appandflow/rn-magic-scroll';
import { Entypo } from '@expo/vector-icons';
import { Text16Asap400, Text18Asap400 } from '../common/typography';
import { FontAwesome5 } from '@expo/vector-icons';
import { scrollTo, useAnimatedRef } from 'react-native-reanimated';

const SignUpScreen = () => {
  const navigation = useNavigation<NavigationProp<any, any>>();
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;
  const { chainInput, scrollRef } = MagicScroll.useFormSmartScroll();

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
      <MagicScroll.ScrollView
        additionalPadding={36}
        scollViewProps={{
          contentContainerStyle: {
            paddingHorizontal: 20,
            paddingTop: screenHeight * 0.18,
          },
        }}
      >
        <Text18Asap400
          style={{
            color: 'white',
            // marginTop: screenHeight * 0.2,

            marginBottom: -14,
          }}
        >
          Phone Number
        </Text18Asap400>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Text18Asap400 style={{ fontSize: 28, marginRight: 10 }}>
            🇨🇦
          </Text18Asap400>

          <IndependantTI
            // label="Phone Number"
            bottomText="Include your country code and use a device you trust."
            name="PhoneNumber"
            returnKeyType="next"
            tiProps={{
              keyboardType: 'phone-pad',
              // inputAccessoryViewID: 'uniqueID',
              placeholder: '+1',
              placeholderTextColor: 'white',
            }}
          />
          {/* <InputAccessoryView nativeID={'uniqueID'} backgroundColor={'black'}>
            <View
              style={{
                height: 48,
                alignItems: 'flex-end',
                justifyContent: 'center',
                paddingHorizontal: 8,
                borderTopColor: '#474747',
                borderTopWidth: 0.5,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: '#874BF6',

                  height: 36,
                  width: 72,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 6,
                }}
                onPress={() => chainInput('Username')}
              >
                <Text16Asap400 style={{ color: 'white', fontWeight: '600' }}>
                  Next
                </Text16Asap400>
              </TouchableOpacity>
            </View>
          </InputAccessoryView> */}
        </View>
        <View
          style={{
            flexDirection: 'row',

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
          // onSubmit={() => chainInput('DateOfBirth')}
          onSubmit={() => {
            // scrollTo(scrollRef, 0, 500, true);
            console.log(scrollRef.current);
            scrollRef.current?.scrollTo({
              x: 0,
              y: screenHeight,
              animated: true,
            });
          }}
        />
        <IndependantTI
          label="Date of Birth"
          name="DateOfBirth"
          returnKeyType="done"
          onSubmit={Keyboard.dismiss}
          tiProps={{
            keyboardType: 'numbers-and-punctuation',
          }}
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
          marginBottom: screenHeight * 0.2,
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
            height: 46,
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
