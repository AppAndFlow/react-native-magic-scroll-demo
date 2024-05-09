import * as React from 'react';
import { MagicScroll } from '@appandflow/rn-magic-scroll';
import { ReturnKeyTypeOptions, ViewStyle } from 'react-native';
import { Text18Asap400 } from '../common/typography';

const IndependantTI = ({
  name,
  onSubmit,
  label,
  returnKeyType,
  style,
}: {
  name: string;
  onSubmit?: () => void;
  label: string;
  returnKeyType: ReturnKeyTypeOptions;
  style?: ViewStyle;
}) => {
  const [isFocused, setIsFocued] = React.useState(false);

  return (
    <MagicScroll.TextInput
      name={name}
      containerStyle={{
        paddingHorizontal: 20,
        marginBottom: 20,
        ...style,
      }}
      renderTop={() => (
        <Text18Asap400 style={{ color: 'white' }}>{label}</Text18Asap400>
      )}
      textInputProps={{
        onFocus: () => setIsFocued(true),
        keyboardType: 'default',
        autoCapitalize: 'none',
        onSubmitEditing: onSubmit,
        onBlur: () => setIsFocued(false),
        returnKeyType: returnKeyType,
        selectionColor: '#874BF6',
        style: {
          marginTop: 4,
          marginBottom: 4,
          padding: 8,
          height: 50,
          width: '100%',
          borderWidth: isFocused ? 2 : 0,
          borderColor: isFocused ? '#874BF6' : 'black',
          backgroundColor: isFocused ? 'black' : '#474747',
          borderRadius: 6,
        },
      }}
    />
  );
};

export default IndependantTI;
