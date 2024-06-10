import * as React from 'react';
import { View } from 'react-native';
import { MagicScroll } from '@appandflow/react-native-magic-scroll';

import OrderSummarySection from './OrderSummarySection';
import colors from '../../constants/colors';
import ShopBottomButton from './ShopBottomButton';
import ShopTopSection from './ShopTopSection';
import AppHeader from '../landing/AppHeader';

const ShopCheckOutScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.black,
      }}
    >
      <AppHeader
        title="Check Out"
        borderBottom
        bgColor={colors.black}
        hamburgerButton
      />

      <MagicScroll.ScrollView
        scollViewProps={{
          showsVerticalScrollIndicator: false,
          style: {
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

export default ShopCheckOutScreen;
