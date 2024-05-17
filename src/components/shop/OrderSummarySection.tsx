import * as React from 'react';
import { Image, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { TextNormal } from '../common/typography';

const OrderSummarySection = () => {
  return (
    <View style={{ flex: 1 }}>
      <TextNormal
        style={{
          color: 'white',
          fontSize: 28,
          fontWeight: '600',
          marginBottom: 26,
        }}
      >
        Order summary
      </TextNormal>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 24,
        }}
      >
        <Image
          style={{ height: 78, width: 78, borderRadius: 12 }}
          source={{
            uri: 'https://fastly.picsum.photos/id/665/100/100.jpg?hmac=gBh-DBPlUG7C47smjwX1e-qdTm9oYytzZGhxBoAt0WE',
          }}
        />
        <View style={{ marginLeft: -66 }}>
          <TextNormal style={{ color: 'white', fontSize: 18, marginBottom: 4 }}>
            Item to purchase
          </TextNormal>
          <TextNormal style={{ color: '#bfbfbf', fontSize: 14 }}>
            Details about item
          </TextNormal>
        </View>

        <TextNormal style={{ color: 'white', fontSize: 18 }}>$ 4,99</TextNormal>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          padding: 18,
          marginBottom: 16,
          borderRadius: 12,
        }}
      >
        <Ionicons name="information-circle-outline" size={24} color="black" />
        <TextNormal
          style={{
            color: 'black',
            fontSize: 16,
            marginLeft: 8,
            width: 300,
          }}
        >
          Don't miss out! Log in to earn and redeem rewards.
        </TextNormal>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 26,
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderColor: '#878686',
            borderRadius: 8,
            padding: 12,
            width: '76%',
          }}
        >
          <TextNormal style={{ color: '#bfbfbf', fontSize: 16 }}>
            Discount code or gift card
          </TextNormal>
        </View>
        <View
          style={{
            backgroundColor: '#232323',
            borderWidth: 1,
            borderColor: '#878686',
            borderRadius: 8,
            padding: 12,
          }}
        >
          <TextNormal
            style={{ color: '#bfbfbf', fontSize: 18, fontWeight: '500' }}
          >
            Apply
          </TextNormal>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TextNormal style={{ color: 'white', fontSize: 18, marginBottom: 8 }}>
          Subtotal
        </TextNormal>
        <TextNormal style={{ color: 'white', fontSize: 18 }}>$ 4,99</TextNormal>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TextNormal style={{ color: 'white', fontSize: 18, marginBottom: 8 }}>
          Shipping
        </TextNormal>
        <TextNormal style={{ color: 'white', fontSize: 18 }}>$ 5,00</TextNormal>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TextNormal style={{ color: 'white', fontSize: 18, marginBottom: 12 }}>
          Estimated taxes
        </TextNormal>
        <TextNormal style={{ color: 'white', fontSize: 18 }}>$ 0.76</TextNormal>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TextNormal
          style={{
            color: 'white',
            fontSize: 24,
            fontWeight: '600',
          }}
        >
          Total
        </TextNormal>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
          <TextNormal
            style={{ color: '#bfbfbf', fontSize: 16, marginRight: 6 }}
          >
            USD
          </TextNormal>
          <TextNormal
            style={{ color: 'white', fontSize: 20, fontWeight: '600' }}
          >
            $ 10.75
          </TextNormal>
        </View>
      </View>
    </View>
  );
};

export default OrderSummarySection;
