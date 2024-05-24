import * as React from 'react';
import { Dimensions, View } from 'react-native';

import { Text22Normal600 } from '../common/typography';
import HeaderFade from '../common/HeaderFade';
import { addOpacityToColor } from '../../utils/color';
import colors from '../../constants/colors';

const ShopHeader = () => {
  const screenHeight = Dimensions.get('screen').height;
  const screenWidth = Dimensions.get('screen').width;
  return (
    <View
      style={{
        height: screenHeight * 0.12,
        width: screenWidth,
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'absolute',
        zIndex: 99,
      }}
    >
      <Text22Normal600 style={{ paddingBottom: 4 }}>
        Review & Pay
      </Text22Normal600>
      <HeaderFade
        style={{
          position: 'absolute',
          top: screenHeight * 0.13,
        }}
        colors={[colors.black, addOpacityToColor(colors.black, 0)]}
      />
    </View>
  );
};

export default ShopHeader;
