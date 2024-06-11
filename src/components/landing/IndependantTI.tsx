import * as React from 'react';
import { MagicScroll } from '@appandflow/react-native-magic-scroll';
import { ReturnKeyTypeOptions, TextInputProps, ViewStyle } from 'react-native';
import Animated, { Easing, FadeInUp, FadeOutUp } from 'react-native-reanimated';

import { Text16Asap400, Text18Asap400 } from '../common/typography';
import colors from '../../constants/colors';

const IndependantTI = ({
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
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <MagicScroll.TextInput
      name={name}
      containerStyle={{
        marginBottom: 10,
        ...style,
      }}
      renderTop={() => (
        <Text18Asap400 style={{ color: 'white' }}>{label}</Text18Asap400>
      )}
      textInputProps={{
        onFocus: () => setIsFocused(true),
        keyboardAppearance: 'dark',
        autoCapitalize: 'none',
        onSubmitEditing: onSubmit,
        onBlur: () => setIsFocused(false),
        returnKeyType: returnKeyType,

        selectionColor: colors.twitchPurple,
        style: {
          color: 'white',
          fontSize: 18,
          marginTop: 4,
          marginBottom: 8,
          padding: 8,
          height: 46,

          borderWidth: isFocused ? 2 : 0,
          borderColor: isFocused ? colors.twitchPurple : 'black',
          backgroundColor: isFocused ? 'black' : colors.twitchGrey,
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

export default IndependantTI;
