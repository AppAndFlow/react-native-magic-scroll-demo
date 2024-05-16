import React from 'react';
import { observer } from 'mobx-react-lite';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Text16PlayFair400, Text40Playfair700 } from '../common/typography';

/**
 * You will mostlikely delete this screen.
 * See routes.tsx to add new screens.
 */
const WelcomeScreen = observer(() => {
  const navigation = useNavigation<NavigationProp<any, any>>();
  return (
    <View
      style={{
        flex: 1,

        backgroundColor: '#a79eab',
        paddingHorizontal: 48,
      }}
    >
      <Text40Playfair700
        style={{
          marginBottom: 300,
          color: 'white',
          marginTop: 76,
          textAlign: 'center',
        }}
      >
        Welcome
      </Text40Playfair700>

      <TouchableOpacity
        onPress={() => navigation.navigate('LandingScreen')}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text16PlayFair400
          style={{
            fontSize: 22,
            textDecorationStyle: 'solid',
            textDecorationLine: 'underline',
            textDecorationColor: 'white',
          }}
        >
          Landing screen
        </Text16PlayFair400>
        <AntDesign name="arrowright" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
});

export default WelcomeScreen;
