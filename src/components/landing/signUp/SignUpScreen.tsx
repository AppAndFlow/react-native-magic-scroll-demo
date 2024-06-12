import * as React from 'react';
import { View, Dimensions, Alert } from 'react-native';
import { observer } from 'mobx-react';

import AppButton from '../AppButton';
import AppHeader from '../AppHeader';
import SignUpForm from './SignUpForm';
import TOSSection from './TOSSection';
import colors from '../../../constants/colors';
import { MagicScroll } from '@appandflow/react-native-magic-scroll';

const SignUpScreen = observer(() => {
  const screenHeight = Dimensions.get('screen').height;
  const screenWidth = Dimensions.get('screen').width;

  const [isButtonEnabled, setIsButtonEnabled] = React.useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <AppHeader title="Sign Up" backButton bgColor="black" borderBottom />

      <SignUpForm setIsButtonEnabled={setIsButtonEnabled} />

      <View
        style={{
          gap: 6,
          position: 'absolute',
          left: 20,
          bottom: screenHeight * 0.16,
          width: screenWidth - 40,
        }}
      >
        <TOSSection />
        <AppButton
          style={{}}
          onPressButton={
            isButtonEnabled
              ? () => Alert.alert('You have successfully signed up!')
              : () => null
          }
          buttonLabel="Sign Up"
          labelColor={isButtonEnabled ? 'white' : '#bdbaba'}
          bgColor={isButtonEnabled ? colors.twitchPurple : colors.twitchGrey}
        />
      </View>
    </View>
  );
});

export default SignUpScreen;
