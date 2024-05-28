import React from 'react';
import { View } from 'react-native';

import { Text40Playfair700 } from '../common/typography';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

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
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <Text40Playfair700>Drawer</Text40Playfair700>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
