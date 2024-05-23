import { Text, TextProps, TextStyle } from 'react-native';
import * as React from 'react';

import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

interface A {
  children: React.ReactNode;
  style?: TextStyle;
}

type P = A & Partial<TextProps>;

/**
 * for adding a font, in style
 * fontFamily: fonts.openSansRegular
 */
export const TextNormal = ({ children, style, ...rest }: P) => (
  <BasicText {...rest} style={[{ fontSize: 36, color: colors.white }, style]}>
    {children}
  </BasicText>
);

export const Text14Normal600 = ({ children, style, ...rest }: P) => (
  <BasicText
    {...rest}
    style={[{ fontSize: 14, color: colors.white, fontWeight: '600' }, style]}
  >
    {children}
  </BasicText>
);

export const Text16Normal400 = ({ children, style, ...rest }: P) => (
  <BasicText
    {...rest}
    style={[{ fontSize: 16, color: colors.white, fontWeight: '400' }, style]}
  >
    {children}
  </BasicText>
);

export const Text16Normal600 = ({ children, style, ...rest }: P) => (
  <BasicText
    {...rest}
    style={[{ fontSize: 16, color: colors.grey, fontWeight: '600' }, style]}
  >
    {children}
  </BasicText>
);

export const Text18Normal500 = ({ children, style, ...rest }: P) => (
  <BasicText
    {...rest}
    style={[
      { fontSize: 18, color: colors.shopLightPurple, fontWeight: '500' },
      style,
    ]}
  >
    {children}
  </BasicText>
);
export const Text20Normal600 = ({ children, style, ...rest }: P) => (
  <BasicText
    {...rest}
    style={[{ fontSize: 20, color: colors.white, fontWeight: '600' }, style]}
  >
    {children}
  </BasicText>
);

export const Text22Normal600 = ({ children, style, ...rest }: P) => (
  <BasicText
    {...rest}
    style={[{ fontSize: 22, color: colors.white, fontWeight: '600' }, style]}
  >
    {children}
  </BasicText>
);

export const Text40Playfair700 = ({ children, style, ...rest }: P) => (
  <BasicText
    {...rest}
    style={[
      {
        fontSize: 40,
        fontFamily: fonts.playfairDisplayBold,
        fontWeight: '700',
      },
      style,
    ]}
  >
    {children}
  </BasicText>
);

export const Text60PlayFair900 = ({ children, style, ...rest }: P) => (
  <BasicText
    {...rest}
    style={[
      {
        fontSize: 60,
        fontFamily: fonts.playfairDisplayExtraBold,
        fontWeight: '900',
      },
      style,
    ]}
  >
    {children}
  </BasicText>
);

export const Text16PlayFair400 = ({ children, style, ...rest }: P) => (
  <BasicText
    {...rest}
    style={[
      {
        fontSize: 16,
        fontFamily: fonts.playfairDisplayRegular,
        fontWeight: '400',
      },
      style,
    ]}
  >
    {children}
  </BasicText>
);
export const Text40Asap700 = ({ children, style, ...rest }: P) => (
  <BasicText
    {...rest}
    style={[
      {
        fontSize: 40,
        fontFamily: fonts.asapCondensedExtraBold,
        fontWeight: '700',
      },
      style,
    ]}
  >
    {children}
  </BasicText>
);

export const Text18Asap400 = ({ children, style, ...rest }: P) => (
  <BasicText
    {...rest}
    style={[
      {
        fontSize: 18,
        fontFamily: fonts.asapSemiBold,
        fontWeight: '400',
      },
      style,
    ]}
  >
    {children}
  </BasicText>
);
export const Text16Asap400 = ({ children, style, ...rest }: P) => (
  <BasicText
    {...rest}
    style={[
      {
        fontSize: 16,
        fontFamily: fonts.asapRegular,
        fontWeight: '400',
      },
      style,
    ]}
  >
    {children}
  </BasicText>
);

/**
 * Every text created should wrap this basic component.
 * Use it to centralize stuff that you want to apply to any Text
 * Component created in Typography.
 * I.E: allowFontScaling={false}
 */
const BasicText = (props: P) => <Text allowFontScaling={false} {...props} />;
