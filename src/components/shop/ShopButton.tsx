import * as React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';
import { Text16Normal600 } from '../common/typography';

const ShopButton = ({
  label,
  onPress,
  bgColor,
  labelColor,
  style,
}: {
  label: string;
  onPress: () => void;
  bgColor: string;
  labelColor: string;
  style?: ViewStyle;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 48,
        backgroundColor: bgColor,
        width: '100%',
        borderRadius: 12,

        alignItems: 'center',
        padding: 14,
        ...style,
      }}
    >
      <Text16Normal600 style={{ color: labelColor }}>{label}</Text16Normal600>
    </TouchableOpacity>
  );
};

export default ShopButton;
