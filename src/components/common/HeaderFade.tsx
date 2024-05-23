import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ViewStyle } from 'react-native';

import localColors from '../../constants/colors';
import { addOpacityToColor } from '../../utils/color';

const HeaderFade = ({
  colors,
  style,
}: {
  colors?: string[];
  style?: ViewStyle;
}) => {
  return (
    <LinearGradient
      colors={
        colors || [
          localColors.bottomSheetShopBG,

          addOpacityToColor(localColors.bottomSheetShopBG, 0),
        ]
      }
      style={[
        {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 20,
        },
        style,
      ]}
    />
  );
};

export default HeaderFade;
