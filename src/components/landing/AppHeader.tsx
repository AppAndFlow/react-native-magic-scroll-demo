import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { SimpleLineIcons } from '@expo/vector-icons';

import { Text18Asap400 } from '../common/typography';
import colors from '../../constants/colors';

const AppHeader = ({
  title,
  backButton,
  hamburgerButton,
  bgColor,
  borderBottom,
}: {
  title: string;
  backButton?: boolean;
  hamburgerButton?: boolean;
  bgColor: string;
  borderBottom?: boolean;
}) => {
  const navigation = useNavigation<NavigationProp<any, any>>();

  const leftButton = () => {
    if (backButton) {
      return (
        <TouchableOpacity onPress={navigation.goBack} style={{}}>
          <Entypo name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
      );
    } else if (hamburgerButton) {
      return (
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <SimpleLineIcons name="menu" size={20} color="white" />
        </TouchableOpacity>
      );
    }
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 10,
        alignItems: 'center',
        backgroundColor: bgColor,
        borderBottomWidth: borderBottom ? 1 : 0,
        borderBottomColor: colors.darkGrey,
      }}
    >
      {leftButton()}
      <Text18Asap400
        style={{
          textAlign: 'center',
          color: 'white',
          marginLeft: 8,
          fontSize: 20,
        }}
      >
        {title}
      </Text18Asap400>
    </View>
  );
};

export default AppHeader;
