import * as React from 'react';
import { MagicScroll } from '@appandflow/rn-magic-scroll';
import { ReturnKeyTypeOptions, TextInputProps, ViewStyle } from 'react-native';
import Animated, { Easing, FadeInUp, FadeOutUp } from 'react-native-reanimated';

import { Text16Asap400, Text18Asap400, TextNormal } from '../common/typography';

const ShopTextInput = ({
  name,
  onSubmit,
  label,
  returnKeyType,
  style,
  tiProps,
  bottomText,
}: {
  name: string;
  onSubmit?: () => void;
  label?: string;
  returnKeyType: ReturnKeyTypeOptions;
  style?: ViewStyle;
  tiProps?: TextInputProps;
  bottomText?: string;
}) => {
  const [isFocused, setIsFocued] = React.useState(false);

  return (
    <MagicScroll.TextInput
      name={name}
      containerStyle={{
        ...style,
      }}
      renderTop={() => (
        <TextNormal style={{ color: 'white', fontSize: 16 }}>
          {label}
        </TextNormal>
      )}
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
          fontSize: 18,
          marginTop: 4,
          marginBottom: 8,
          padding: 8,
          height: 46,

          borderWidth: isFocused ? 2 : 1,
          borderColor: isFocused ? 'white' : '#888686',
          backgroundColor: '#474747',
          borderRadius: 6,
        },
        ...tiProps,
      }}
      renderBottom={
        bottomText && isFocused
          ? () => (
              <Animated.View
                entering={FadeInUp.duration(300)
                  .easing(Easing.ease)
                  .withInitialValues({
                    opacity: 0,
                    transform: [{ translateY: -5 }],
                  })}
                exiting={FadeOutUp.duration(200).easing(Easing.ease)}
              >
                <Text16Asap400 style={{ fontSize: 14, color: 'white' }}>
                  {bottomText}
                </Text16Asap400>
              </Animated.View>
            )
          : undefined
      }
    />
  );
};

export default ShopTextInput;
