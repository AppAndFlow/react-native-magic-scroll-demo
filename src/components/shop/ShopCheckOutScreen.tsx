import * as React from 'react';
import {
  Alert,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import { TextNormal } from '../common/typography';
import { useUiStore } from '../../stores/ui';
import ShopAddressView from './ShopAddressView';
import ShopPaymentView from './ShopPaymentView';
import OrderSummarySection from './OrderSummarySection';
import { observer } from 'mobx-react';
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
        <TextNormal style={{ color: 'white', fontSize: 22, fontWeight: '600' }}>
          Review & Pay
        </TextNormal>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: screenHeight * 0.13,
          paddingHorizontal: 20,
          paddingTop: 16,
        }}
      >
        <TextNormal style={{ color: 'white', fontSize: 16 }}>
          marjorie@appandflow.com
        </TextNormal>
        <Separator />
        <TextNormal
          style={{
            color: colors.grey,
            fontSize: 16,
            fontWeight: '600',
            marginBottom: 6,
          }}
        >
          Ship to
        </TextNormal>
        <TouchableOpacity
          onPress={() =>
            uiStore.openBottomSheet({
              bottomSheetStyle: { backgroundColor: colors.bottomSheetShopBG },
              snapPoints: [1, screenHeight * 0.88],
              renderContent: () => <ShopAddressView />,
            })
          }
        >
          <TextNormal
            style={{
              fontSize: 18,
              fontWeight: '500',
              color: colors.shopPurple,
            }}
          >
            + Add an address
          </TextNormal>
        </TouchableOpacity>
        <Separator />
        <TextNormal
          style={{
            color: colors.grey,
            fontSize: 16,
            fontWeight: '600',
            marginBottom: 6,
          }}
        >
          Shipping method
        </TextNormal>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextNormal
            style={{ color: 'white', fontSize: 16, fontWeight: '500' }}
          >
            Priority shipping (2-5 Business Days)
          </TextNormal>
          <TextNormal
            style={{ color: 'white', fontSize: 16, fontWeight: '500' }}
          >
            $ 5.00
          </TextNormal>
        </View>
        <Separator />
        <TextNormal
          style={{
            color: colors.grey,
            fontSize: 16,
            fontWeight: '600',
            marginBottom: 6,
          }}
        >
          Payment method
        </TextNormal>
        <TouchableOpacity
          onPress={() =>
            uiStore.openBottomSheet({
              bottomSheetStyle: { backgroundColor: colors.bottomSheetShopBG },
              snapPoints: [1, screenHeight * 0.78],
              renderContent: () => <ShopPaymentView />,
            })
          }
        >
          <TextNormal
            style={{
              fontSize: 18,
              fontWeight: '500',
              color: colors.shopPurple,
            }}
          >
            + Add a payment method
          </TextNormal>
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
          <TextNormal
            style={{ color: 'white', fontSize: 16, fontWeight: '700' }}
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
              style={{ color: 'white', fontSize: 16, fontWeight: '700' }}
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
