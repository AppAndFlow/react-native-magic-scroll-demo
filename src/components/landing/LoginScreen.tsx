import { NavigationProp, useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Dimensions, Keyboard, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Text16Asap400, Text18Asap400 } from '../common/typography';
import { MagicScroll } from '@appandflow/rn-magic-scroll';

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
      <MagicScroll.ScrollView>
        <MagicScroll.TextInput
          containerStyle={{
            paddingHorizontal: 20,
            marginBottom: 20,
            marginTop: screenHeight * 0.35,
          }}
          renderTop={() => (
            <Text18Asap400 style={{ color: 'white' }}>Username</Text18Asap400>
          )}
          textInputProps={{
            autoCapitalize: 'none',
            onSubmitEditing: () => chainInput('Password'),
            returnKeyType: 'next',
            selectionColor: '#bc9df5',
            cursorColor: '#bc9df5',
            style: {
              marginTop: 4,
              padding: 8,
              height: 50,
              width: '100%',
              backgroundColor: '#575757',
              borderRadius: 6,
            },
          }}
        />
        <MagicScroll.TextInput
          name="Password"
          containerStyle={{ paddingHorizontal: 20 }}
          renderTop={() => (
            <Text18Asap400 style={{ color: 'white' }}>Password</Text18Asap400>
          )}
          textInputProps={{
            onSubmitEditing: () => Keyboard.dismiss(),
            returnKeyType: 'done',
            secureTextEntry: true,
            autoCapitalize: 'none',
            selectionColor: '#bc9df5',
            style: {
              marginTop: 4,
              padding: 8,
              height: 50,
              width: '100%',
              backgroundColor: '#575757',
              borderRadius: 6,
            },
          }}
        />
        <Text16Asap400
          style={{
            color: '#bc9df5',
            marginTop: 24,
            paddingLeft: 20,
            fontSize: 18,
          }}
        >
          Trouble logging in?
        </Text16Asap400>
        <TouchableOpacity
          style={{
            height: 50,
            width: screenWidth - 40,
            marginHorizontal: 20,
            backgroundColor: '#575757',
            borderRadius: 6,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            bottom: -74,
          }}
        >
          <Text18Asap400 style={{ color: 'white' }}>Log In</Text18Asap400>
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
