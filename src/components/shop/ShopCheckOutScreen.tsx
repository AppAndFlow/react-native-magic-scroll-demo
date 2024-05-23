import * as React from 'react';
import {
  Alert,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { observer } from 'mobx-react';

import {
  Text16Normal400,
  Text16Normal600,
  Text18Normal500,
  Text22Normal600,
} from '../common/typography';
import { useUiStore } from '../../stores/ui';
import ShopAddressView from './ShopAddressView';
import ShopPaymentView from './ShopPaymentView';
import OrderSummarySection from './OrderSummarySection';

import colors from '../../constants/colors';

const Separator = ({ style }: { style?: ViewStyle }) => {
  return (
    <View
      style={{
        width: '100%',
        height: 1,
        backgroundColor: colors.darkGrey,
        marginVertical: 12,
        ...style,
      }}
    />
  );
};

const ShopCheckOutScreen = observer(() => {
  const screenHeight = Dimensions.get('screen').height;
  const screenWidth = Dimensions.get('screen').width;

  const uiStore = useUiStore();

  return (
    <View style={{ flex: 1, backgroundColor: colors.black }}>
      <View
        style={{
          height: screenHeight * 0.12,
          width: screenWidth,

          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingBottom: 18,
          position: 'absolute',
          zIndex: 99,
        }}
      >
        <Text22Normal600>Review & Pay</Text22Normal600>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: screenHeight * 0.13,
          paddingHorizontal: 20,
          paddingTop: 16,
        }}
      >
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
          <Text16Normal400>
            Priority shipping (2-5 Business Days)
          </Text16Normal400>
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
        <OrderSummarySection />
      </ScrollView>
      <View
        style={{
          height: screenHeight * 0.14,
          width: screenWidth,
          backgroundColor: colors.black,
          borderTopWidth: 1,
          borderTopColor: colors.darkGrey,
          padding: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => Alert.alert('Payment successful!')}
          style={{
            height: 48,
            width: '100%',
            backgroundColor: '#562bcd',
            borderRadius: 12,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 14,
          }}
        >
          <Text16Normal600 style={{ color: colors.white }}>
            Pay Now
          </Text16Normal600>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={{
                width: 1,
                height: 28,
                backgroundColor: 'black',
                marginRight: 12,
              }}
            />
            <Text16Normal600 style={{ color: colors.white }}>
              $10.75
            </Text16Normal600>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
});

export default ShopCheckOutScreen;
