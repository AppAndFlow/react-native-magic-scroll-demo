import * as React from 'react';
import {
  Dimensions,
  ScrollView,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import { TextNormal } from '../common/typography';
import { useUiStore } from '../../stores/ui';
import ShopAddressView from './ShopAddressView';
import metrics from '../../constants/metrics';
import ShopPaymentView from './ShopPaymentView';
import OrderSummarySection from './OrderSummarySection';
import { observer } from 'mobx-react';

const Separator = ({ style }: { style?: ViewStyle }) => {
  return (
    <View
      style={{
        width: '100%',
        height: 1,
        backgroundColor: '#545353',
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
    <View style={{ flex: 1, backgroundColor: 'black' }}>
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
        <TextNormal style={{ color: 'white', fontSize: 26, fontWeight: '600' }}>
          Review & Pay
        </TextNormal>
      </View>
      <ScrollView
        style={{
          marginTop: screenHeight * 0.13,
          paddingHorizontal: 20,
        }}
      >
        <TextNormal style={{ color: 'white', fontSize: 18 }}>
          test@email.com
        </TextNormal>
        <Separator />
        <TextNormal
          style={{ color: '#868585', fontSize: 20, fontWeight: '600' }}
        >
          Ship to
        </TextNormal>
        <TouchableOpacity
          onPress={() =>
            uiStore.openBottomSheet({
              snapPoints: [1, screenHeight * 0.85],
              renderContent: () => <ShopAddressView />,
            })
          }
        >
          <TextNormal
            style={{ fontSize: 20, fontWeight: '500', color: '#dbaff9' }}
          >
            + Add an address
          </TextNormal>
        </TouchableOpacity>
        <Separator />
        <TextNormal
          style={{ color: '#868585', fontSize: 20, fontWeight: '600' }}
        >
          Shipping method
        </TextNormal>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextNormal
            style={{ color: 'white', fontSize: 16, fontWeight: '600' }}
          >
            Priority shipping (2-5 Business Days)
          </TextNormal>
          <TextNormal
            style={{ color: 'white', fontSize: 16, fontWeight: '600' }}
          >
            $ 5.00
          </TextNormal>
        </View>
        <Separator />
        <TextNormal
          style={{ color: '#868585', fontSize: 20, fontWeight: '600' }}
        >
          Payment method
        </TextNormal>
        <TouchableOpacity
          onPress={() =>
            uiStore.openBottomSheet({
              snapPoints: [1, screenHeight * 0.82],
              renderContent: () => <ShopPaymentView />,
            })
          }
        >
          <TextNormal
            style={{ fontSize: 20, fontWeight: '500', color: '#dbaff9' }}
          >
            + Add a payment method
          </TextNormal>
        </TouchableOpacity>
        <Separator
          style={{
            width: screenWidth,
            height: 8,
            backgroundColor: '#272727',
            marginLeft: -20,
          }}
        />
        <OrderSummarySection />
      </ScrollView>
      <View
        style={{
          height: screenHeight * 0.14,
          width: screenWidth,
          backgroundColor: 'black',
          borderTopWidth: 1,
          borderTopColor: '#545353',
          padding: 20,
        }}
      >
        <TouchableOpacity
          style={{
            height: 48,
            width: '100%',
            backgroundColor: '#874BF6',
            borderRadius: 12,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 14,
          }}
        >
          <TextNormal
            style={{ color: 'white', fontSize: 16, fontWeight: '600' }}
          >
            Pay Now
          </TextNormal>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={{
                width: 1,
                height: 28,
                backgroundColor: 'black',
                marginRight: 12,
              }}
            />
            <TextNormal
              style={{ color: 'white', fontSize: 16, fontWeight: '600' }}
            >
              $10.75
            </TextNormal>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
});

export default ShopCheckOutScreen;
