import { NavigationProp, useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Dimensions, Keyboard, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Text16Asap400, Text18Asap400 } from '../common/typography';
import { MagicScroll } from '@appandflow/rn-magic-scroll';
import IndependantTI from './IndependantTI';

const LoginScreen = () => {
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
          style={{ marginTop: screenHeight * 0.33 }}
        />
        <IndependantTI
          name="Password"
          label="Password"
          returnKeyType="done"
          onSubmit={() => Keyboard.dismiss()}
        />

        <Text16Asap400
          style={{
            color: '#bc9df5',

            paddingLeft: 20,
            fontSize: 18,
          }}
        >
          Trouble logging in?
        </Text16Asap400>
        <TouchableOpacity
          style={{
            height: 46,
            width: screenWidth - 40,

            backgroundColor: '#474747',
            borderRadius: 6,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            bottom: -74,
          }}
        >
          <Text18Asap400 style={{ color: '#bdbaba' }}>Log In</Text18Asap400>
        </TouchableOpacity>
      </MagicScroll.ScrollView>
    </View>
  );
};

export default () => (
  <MagicScroll.SmartScrollView>
    <LoginScreen />
  </MagicScroll.SmartScrollView>
);
