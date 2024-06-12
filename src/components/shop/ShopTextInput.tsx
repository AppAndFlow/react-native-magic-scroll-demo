import * as React from 'react';
import { MagicScroll } from '@appandflow/react-native-magic-scroll';
import {
  ReturnKeyTypeOptions,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import * as ExpoVectorIcon from '@expo/vector-icons';

import colors from '../../constants/colors';

const { ...expoVectorIconFamilies } = ExpoVectorIcon;

type LeftExpoVectorIconFamiliesKeys = keyof typeof expoVectorIconFamilies;

type LeftExpoVectorIconFamiliesNameKeys =
  | keyof typeof ExpoVectorIcon.Feather.glyphMap
  | keyof typeof ExpoVectorIcon.Ionicons.glyphMap
  | keyof typeof ExpoVectorIcon.SimpleLineIcons.glyphMap;

const ShopTextInput = ({
  name,
  onSubmit,
  returnKeyType,
  style,
  tiProps,
  rightExpoVectorIcon,
  chainable
}: {
  name: string;
  onSubmit?: () => void;
  returnKeyType: ReturnKeyTypeOptions;
  style?: ViewStyle;
  tiProps?: TextInputProps;
  rightExpoVectorIcon?: {
    family: LeftExpoVectorIconFamiliesKeys;
    name: LeftExpoVectorIconFamiliesNameKeys;
    size?: number;
    style?: ViewStyle;
    color?: string;
  };
  chainable?: string
}) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const renderRightExpoVectorIcon = () => {
    if (rightExpoVectorIcon?.name && rightExpoVectorIcon?.family) {
      const { family, name, ...rest } = rightExpoVectorIcon;
      const VectorIcon = expoVectorIconFamilies[family] as any;

      return (
        <View style={{ marginRight: 4 }}>
          <VectorIcon name={name} color={'white'} {...rest} />
        </View>
      );
    }
    return null;
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: 8,
        padding: 8,
        height: 46,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: isFocused ? 2 : 1,
        borderColor: isFocused ? 'white' : colors.grey,
        backgroundColor: colors.bottomSheetShopBG,
        borderRadius: 6,
      }}
    >
      <MagicScroll.TextInput
        name={name}
        chainable={chainable}
        containerStyle={{
          height: 46,
          width: rightExpoVectorIcon ? '86%' : '100%',
          padding: 8,
          justifyContent: 'center',
          ...style,
        }}
        textInputProps={{
          onFocus: () => setIsFocused(true),
          keyboardAppearance: 'dark',
          autoCapitalize: 'none',
          onSubmitEditing: onSubmit,
          onBlur: () => setIsFocused(false),
          returnKeyType: returnKeyType,
          placeholderTextColor: colors.lightGrey,
          style: {
            color: 'white',
            fontSize: 16,
          },
          ...tiProps,
        }}
      />
      {renderRightExpoVectorIcon()}
    </View>
  );
};

export default ShopTextInput;
