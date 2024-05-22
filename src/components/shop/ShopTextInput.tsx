import * as React from 'react';
import { MagicScroll } from '@appandflow/rn-magic-scroll';
import {
  ReturnKeyTypeOptions,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

import * as ExpoVectorIcon from '@expo/vector-icons';

const { ...expoVectorIconFamilies } = ExpoVectorIcon;

type LeftExpoVectorIconFamiliesKeys = keyof typeof expoVectorIconFamilies;

type LeftExpoVectorIconFamiliesNameKeys =
  | keyof typeof ExpoVectorIcon.AntDesign.glyphMap
  | keyof typeof ExpoVectorIcon.Entypo.glyphMap
  | keyof typeof ExpoVectorIcon.EvilIcons.glyphMap
  | keyof typeof ExpoVectorIcon.Feather.glyphMap
  | keyof typeof ExpoVectorIcon.FontAwesome.glyphMap
  | keyof typeof ExpoVectorIcon.Fontisto.glyphMap
  | keyof typeof ExpoVectorIcon.Foundation.glyphMap
  | keyof typeof ExpoVectorIcon.Ionicons.glyphMap
  | keyof typeof ExpoVectorIcon.MaterialCommunityIcons.glyphMap
  | keyof typeof ExpoVectorIcon.MaterialIcons.glyphMap
  | keyof typeof ExpoVectorIcon.Octicons.glyphMap
  | keyof typeof ExpoVectorIcon.SimpleLineIcons.glyphMap
  | keyof typeof ExpoVectorIcon.Zocial.glyphMap;

const ShopTextInput = ({
  name,
  onSubmit,

  returnKeyType,
  style,
  tiProps,

  rightExpoVectorIcon,
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
}) => {
  const [isFocused, setIsFocued] = React.useState(false);

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
        borderColor: isFocused ? 'white' : '#888686',
        backgroundColor: '#1c1c1c',
        borderRadius: 6,
      }}
    >
      <MagicScroll.TextInput
        name={name}
        containerStyle={{
          ...style,
        }}
        textInputProps={{
          onFocus: () => setIsFocued(true),
          keyboardAppearance: 'dark',
          autoCapitalize: 'none',
          onSubmitEditing: onSubmit,
          onBlur: () => setIsFocued(false),
          returnKeyType: returnKeyType,
          placeholderTextColor: '#bebebe',

          selectionColor: '#874BF6',
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
