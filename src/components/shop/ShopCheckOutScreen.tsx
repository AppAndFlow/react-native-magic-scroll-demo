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

const ShopCheckOutScreen = () => {
  const screenHeight = Dimensions.get('screen').height;
  const screenWidth = Dimensions.get('screen').width;

  const uiStore = useUiStore();

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <View
        style={{
          height: screenHeight * 0.13,
          width: screenWidth,

          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingBottom: 6,
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
          height: screenHeight * 2,
          marginTop: screenHeight * 0.13,
          padding: 20,
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
              snapPoints: [1, screenHeight * 0.87 + metrics.safeBottomDistance],
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
        <Separator />
        <TextNormal
          style={{ color: '#868585', fontSize: 20, fontWeight: '600' }}
        >
          Payment method
        </TextNormal>
        <TouchableOpacity
          onPress={() =>
            uiStore.openBottomSheet({
              snapPoints: [1, screenHeight * 0.87 + metrics.safeBottomDistance],
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
        <Separator />
        <OrderSummarySection />
      </ScrollView>
    </View>
  );
};

export default ShopCheckOutScreen;
