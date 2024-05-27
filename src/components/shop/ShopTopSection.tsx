import * as React from 'react';
import { Dimensions, TouchableOpacity, View, ViewStyle } from 'react-native';

import {
  Text16Normal400,
  Text16Normal600,
  Text18Normal500,
} from '../common/typography';
import colors from '../../constants/colors';
import ShopAddressView from './ShopAddressView';
import ShopPaymentView from './ShopPaymentView';
import { useUiStore } from '../../stores/ui';

const Separator = ({ style }: { style?: ViewStyle }) => {
  return (
    <View
      style={{
        height: 1,
        backgroundColor: colors.darkGrey,
        marginVertical: 12,
        ...style,
      }}
    />
  );
};

const ShopTopSection = () => {
  const uiStore = useUiStore();

  const screenHeight = Dimensions.get('screen').height;
  const screenWidth = Dimensions.get('screen').width;
  return (
    <View>
      <Text16Normal400>marjorie@appandflow.com</Text16Normal400>
      <Separator />
      <Text16Normal600 style={{ marginBottom: 6 }}>Ship to</Text16Normal600>
      <TouchableOpacity
        onPress={() =>
          uiStore.openBottomSheet({
            bottomSheetStyle: { backgroundColor: colors.bottomSheetShopBG },
            snapPoints: [1, screenHeight * 0.88],
            renderContent: () => <ShopAddressView />,
          })
        }
      >
        <Text18Normal500>+ Add an address</Text18Normal500>
      </TouchableOpacity>
      <Separator />
      <Text16Normal600 style={{ marginBottom: 6 }}>
        Shipping method
      </Text16Normal600>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text16Normal400>Priority shipping (2-5 Business Days)</Text16Normal400>
        <Text16Normal400>$ 5.00</Text16Normal400>
      </View>
      <Separator />
      <Text16Normal600 style={{ marginBottom: 6 }}>
        Payment method
      </Text16Normal600>
      <TouchableOpacity
        onPress={() =>
          uiStore.openBottomSheet({
            bottomSheetStyle: { backgroundColor: colors.bottomSheetShopBG },
            snapPoints: [1, screenHeight * 0.78],
            renderContent: () => <ShopPaymentView />,
          })
        }
      >
        <Text18Normal500>+ Add a payment method</Text18Normal500>
      </TouchableOpacity>
      <Separator
        style={{
          width: screenWidth,
          height: 8,
          marginVertical: 16,
          backgroundColor: colors.darkGrey,
          marginLeft: -20,
        }}
      />
    </View>
  );
};

export default ShopTopSection;
