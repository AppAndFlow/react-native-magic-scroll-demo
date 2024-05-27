import * as React from 'react';
import { View } from 'react-native';

import {
  Text14Normal600,
  Text16Normal400,
  Text20Normal600,
} from '../common/typography';
import colors from '../../constants/colors';

const SummmaryRow = ({
  text,
  amount,
  totalLine,
}: {
  text: string;
  amount: string;
  totalLine?: boolean;
}) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text16Normal400
        style={{
          marginBottom: 8,
          fontSize: totalLine ? 20 : 16,
          fontWeight: totalLine ? '600' : '400',
        }}
      >
        {text}
      </Text16Normal400>
      {totalLine ? (
        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
          <Text14Normal600 style={{ color: colors.grey, marginRight: 6 }}>
            CAD
          </Text14Normal600>
          <Text20Normal600>$ {amount}</Text20Normal600>
        </View>
      ) : (
        <Text16Normal400 style={{ color: 'white' }}>$ {amount}</Text16Normal400>
      )}
    </View>
  );
};
export default SummmaryRow;
