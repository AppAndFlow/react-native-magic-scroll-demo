import * as React from 'react';
import { View, Dimensions, Alert } from 'react-native';
import { observer } from 'mobx-react';

import AppButton from '../AppButton';
import AppHeader from '../AppHeader';
import SignUpForm from './SignUpForm';
import TOSSection from './TOSSection';
import colors from '../../../constants/colors';

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
          bgColor={isButtonEnabled ? colors.twitchPurple : colors.twitchGrey}
        />
      </View>
    </View>
  );
});

export default SignUpScreen;
