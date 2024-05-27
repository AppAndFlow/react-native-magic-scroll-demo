import * as React from 'react';
import { Dimensions, View } from 'react-native';
import { MagicScroll } from '@appandflow/rn-magic-scroll';

import OrderSummarySection from './OrderSummarySection';
import colors from '../../constants/colors';
import ShopBottomButton from './ShopBottomButton';
import ShopHeader from './ShopHeader';
import ShopTopSection from './ShopTopSection';

const ShopCheckOutScreen = () => {
  const screenHeight = Dimensions.get('screen').height;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.black,
      }}
    >
      <ShopHeader />
      <MagicScroll.ScrollView
        scollViewProps={{
          showsVerticalScrollIndicator: false,
          style: {
            marginTop: screenHeight * 0.13,
            paddingHorizontal: 20,
            paddingTop: 24,
          },
        }}
      >
        <ShopTopSection />
        <OrderSummarySection />
      </MagicScroll.ScrollView>
      <ShopBottomButton />
    </View>
  );
};

export default () => (
  <MagicScroll.SmartScrollView>
    <ShopCheckOutScreen />
  </MagicScroll.SmartScrollView>
);
