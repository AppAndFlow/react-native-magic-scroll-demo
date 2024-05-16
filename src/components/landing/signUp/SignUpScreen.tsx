import * as React from 'react';
import { MagicScroll } from '@appandflow/rn-magic-scroll';
import { View, Dimensions, Alert } from 'react-native';
import { observer } from 'mobx-react';

import AppButton from '../AppButton';
import AppHeader from '../AppHeader';
import SignUpForm from './SignUpForm';
import TOSSection from './TOSSection';

const SignUpScreen = observer(() => {
  const screenHeight = Dimensions.get('screen').height;
  const screenWidth = Dimensions.get('screen').width;

  const [isButtonEnabled, setIsButtonEnabled] = React.useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <AppHeader title="Sign Up" />
      <SignUpForm setIsButtonEnabled={setIsButtonEnabled} />
      <View
        style={{
          paddingHorizontal: 20,
          marginBottom: screenHeight * 0.16,
        }}
      >
        <TOSSection />
        <AppButton
          style={{
            position: 'absolute',
            left: 20,
            top: 46,
            width: screenWidth - 40,
          }}
          onPressButton={
            isButtonEnabled
              ? () => Alert.alert('You have successfully signed up!')
              : () => null
          }
          buttonLabel="Sign Up"
          labelColor={isButtonEnabled ? 'white' : '#bdbaba'}
          bgColor={isButtonEnabled ? '#874BF6' : '#474747'}
        />
      </View>
    </View>
  );
});

export default () => (
  <MagicScroll.SmartScrollView>
    <SignUpScreen />
  </MagicScroll.SmartScrollView>
);
