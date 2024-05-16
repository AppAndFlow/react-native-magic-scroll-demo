import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Text18Asap400 } from '../common/typography';

const AppHeader = ({ title }: { title: string }) => {
  const navigation = useNavigation<NavigationProp<any, any>>();
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingTop: 64,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ position: 'absolute', top: 65, left: 0 }}
      >
        <Entypo name="chevron-left" size={24} color="white" />
      </TouchableOpacity>
      <Text18Asap400
        style={{
          textAlign: 'center',
          color: 'white',

          fontSize: 20,
        }}
      >
        {title}
      </Text18Asap400>
    </View>
  );
};

export default AppHeader;
