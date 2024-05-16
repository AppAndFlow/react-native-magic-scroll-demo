import * as React from 'react';
import { View } from 'react-native';

import { Text16Asap400 } from '../../common/typography';

const TOSSection = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <Text16Asap400 style={{ fontSize: 12, color: 'white' }}>
        By clicking Sign Up, you are agreeing to this App's{' '}
      </Text16Asap400>
      <Text16Asap400 style={{ fontSize: 12, color: '#bc9df5' }}>
        Terms of Service{' '}
      </Text16Asap400>
      <Text16Asap400 style={{ fontSize: 12, color: 'white' }}>
        and are acknowledging our{' '}
      </Text16Asap400>
      <Text16Asap400 style={{ fontSize: 12, color: '#bc9df5' }}>
        Privacy Notice{' '}
      </Text16Asap400>
      <Text16Asap400 style={{ fontSize: 12, color: 'white' }}>
        applies.
      </Text16Asap400>
    </View>
  );
};

export default TOSSection;
