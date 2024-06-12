import * as React from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';

import colors from '../../constants/colors';
import { Text16Normal600 } from '../common/typography';

const ShopBottomButton = () => {
  return (
    <View
      style={{
        flex: 1,
        width: '100%',

        backgroundColor: colors.black,
        borderTopWidth: 1,
        borderTopColor: colors.darkGrey,
        paddingHorizontal: 20,
        paddingTop: 14,
        paddingBottom: 34,
        position: 'absolute',
        bottom: 0,
        left: 0,
      }}
    >
      <TouchableOpacity
        onPress={() => Alert.alert('Payment successful!')}
        style={{
          height: 48,
          backgroundColor: colors.shopPurple,
          borderRadius: 12,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 14,
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
  );
};

export default ShopBottomButton;
