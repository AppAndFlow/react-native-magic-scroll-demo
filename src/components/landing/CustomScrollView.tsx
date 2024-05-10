import * as React from 'react';
import { PropsWithChildren } from 'react';
import Animated, { AnimatedScrollViewProps } from 'react-native-reanimated';
import { MagicScroll } from '@appandflow/rn-magic-scroll';
import { View, Keyboard, TouchableOpacity, Dimensions } from 'react-native';
import { Text16Asap400, Text18Asap400 } from '../common/typography';
import IndependantTI from './IndependantTI';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import delay from '../../utils/delay';

function CustomScrollView() {
  const {
    scrollHandler,
    scrollRef,
    baseScrollViewProps,
    translateStyle,
    chainInput,
  } = MagicScroll.useFormSmartScroll({ padding: 36 });

  const screenHeight = Dimensions.get('screen').height;
  const screenWidth = Dimensions.get('screen').width;

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
        <TouchableOpacity>
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
      <Animated.ScrollView
        contentContainerStyle={{
          height: 553 + screenHeight * 0.2,
          paddingHorizontal: 20,
          paddingTop: screenHeight * 0.2,
        }}
        onScroll={scrollHandler}
        ref={scrollRef}
        {...baseScrollViewProps}
        // {...props.scollViewProps}
      >
        <Animated.View style={[translateStyle, { flex: 1 }]}>
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
              style={{ flex: 1 }}
              tiProps={{
                keyboardType: 'phone-pad',
                // inputAccessoryViewID: 'uniqueID',
                placeholder: '+1',
                placeholderTextColor: 'white',
              }}
            />
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
              console.log(screenHeight * 0.65);
              Keyboard.dismiss();

              scrollRef.current?.scrollTo({
                x: 0,
                y: 560,
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
        </Animated.View>
      </Animated.ScrollView>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingHorizontal: 20,
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginBottom: screenHeight * 0.1,
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
}

export default () => (
  <MagicScroll.SmartScrollView>
    <CustomScrollView />
  </MagicScroll.SmartScrollView>
);
