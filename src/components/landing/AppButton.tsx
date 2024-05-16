import * as React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';

import { Text18Asap400 } from '../common/typography';

const AppButton = ({
  bgColor,
  labelColor,
  onPressButton,
  buttonLabel,
  style,
}: {
  bgColor: string;
  labelColor: string;
  onPressButton: () => void;
  buttonLabel: string;
  style?: ViewStyle;
}) => {
  return (
    <TouchableOpacity
      onPress={onPressButton}
      style={{
        flex: 1,
        height: 46,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: bgColor,
        borderRadius: 8,
        ...style,
      }}
    >
      <Text18Asap400 style={{ color: labelColor }}>{buttonLabel}</Text18Asap400>
    </TouchableOpacity>
  );
};

export default AppButton;
