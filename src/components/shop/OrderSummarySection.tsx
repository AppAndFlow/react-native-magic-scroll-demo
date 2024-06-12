import * as React from 'react';
import {
  Alert,
  Dimensions,
  Image,
  Keyboard,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {
  Text14Normal600,
  Text16Normal400,
  Text18Normal500,
  Text22Normal600,
} from '../common/typography';
import colors from '../../constants/colors';
import ShopTextInput from './ShopTextInput';
import SummmaryRow from './SummaryRow';

const OrderSummarySection = () => {
  const screenWidth = Dimensions.get('screen').width;

  const [discountCode, setDiscountCode] = React.useState('');

  const onPressApply = () => {
    if (discountCode !== '') {
      Alert.alert('Discount code successfully applied!');
    } else {
      Alert.alert('No code entered.');
    }
  };
  return (
    <View>
      <Text22Normal600
        style={{
          fontSize: 24,
          marginBottom: 26,
        }}
      >
        Order summary (1)
      </Text22Normal600>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 24,
        }}
      >
        <Image
          style={{ height: 72, width: 72, borderRadius: 12 }}
          source={{
            uri: 'https://fastly.picsum.photos/id/665/100/100.jpg?hmac=gBh-DBPlUG7C47smjwX1e-qdTm9oYytzZGhxBoAt0WE',
          }}
        />
        <View style={{ marginLeft: -70 }}>
          <Text16Normal400 style={{ marginBottom: 4 }}>
            Item to purchase
          </Text16Normal400>
          <Text16Normal400 style={{ color: colors.lightGrey, fontSize: 12 }}>
            Details about item
          </Text16Normal400>
        </View>

        <Text16Normal400>$ 4.99</Text16Normal400>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          justifyContent: 'space-between',
          padding: 18,
          marginBottom: 16,
          borderRadius: 12,
        }}
      >
        <Ionicons
          name="information-circle-outline"
          size={24}
          color={colors.darkGrey}
        />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginLeft: 10,
            alignItems: 'center',
          }}
        >
          <Text14Normal600
            style={{
              color: 'black',
              fontWeight: '500',
            }}
          >
            Don't miss out!
          </Text14Normal600>
          <Text14Normal600
            style={{
              color: colors.shopPurple,
              fontWeight: '500',
            }}
          >
            {' '}
            Log in{' '}
          </Text14Normal600>
          <Text14Normal600
            style={{
              color: 'black',
              fontWeight: '500',
            }}
          >
            to earn and redeem
          </Text14Normal600>
          <Text14Normal600
            style={{
              color: 'black',
              fontWeight: '500',
              flexWrap: 'wrap',
            }}
          >
            rewards.
          </Text14Normal600>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <ShopTextInput
          name="Discount"
          returnKeyType="done"
          onSubmit={Keyboard.dismiss}
          style={{ width: screenWidth * 0.62 }}
          tiProps={{
            value: discountCode,
            keyboardType: 'default',
            onChangeText: (val) => setDiscountCode(val),
            placeholder: 'Discount or gift card',
            style: { color: 'white' },
          }}
        />
        <TouchableOpacity
          onPress={onPressApply}
          style={{
            backgroundColor: discountCode !== '' ? 'white' : '#232323',
            borderWidth: discountCode !== '' ? 0 : 1,
            borderColor: colors.grey,
            borderRadius: 8,
            padding: 10,
            height: 46,
            alignItems: 'center',
          }}
        >
          <Text18Normal500
            style={{
              color:
                discountCode !== ''
                  ? colors.bottomSheetShopBG
                  : colors.lightGrey,
            }}
          >
            Apply
          </Text18Normal500>
        </TouchableOpacity>
      </View>

      <SummmaryRow text="Subtotal" amount="4.99" />
      <SummmaryRow text="Shipping" amount="5.00" />
      <SummmaryRow text="Estimated taxes" amount="0.76" />
      <SummmaryRow text="Total" amount="10.75" totalLine />
    </View>
  );
};

export default OrderSummarySection;
