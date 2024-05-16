import * as React from 'react';
import Animated from 'react-native-reanimated';
import { MagicScroll } from '@appandflow/rn-magic-scroll';
import {
  View,
  Keyboard,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { observer } from 'mobx-react';
import { format } from 'date-fns';

import metrics from '../../constants/metrics';
import { useUiStore } from '../../stores/ui';
import IndependantTI from './IndependantTI';
import { Text16Asap400, Text18Asap400 } from '../common/typography';
import AppButton from './AppButton';
import AppHeader from './AppHeader';

const SignUpScreen = observer(() => {
  const navigation = useNavigation<NavigationProp<any, any>>();
  const uiStore = useUiStore();
  const {
    scrollHandler,
    scrollRef,
    baseScrollViewProps,
    translateStyle,
    chainInput,
  } = MagicScroll.useFormSmartScroll({ padding: 4 });

  const screenHeight = Dimensions.get('screen').height;
  const screenWidth = Dimensions.get('screen').width;

  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [birthdate, setBirthdate] = React.useState(new Date() || undefined);

  const [isFocused, setIsFocused] = React.useState(false);

  const buttonEnabled = () => {
    if (
      email &&
      username &&
      password !== '' &&
      birthdate < new Date(2012, 0, 1)
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <AppHeader title="Sign Up" />
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          height: 553 + screenHeight * 0.2,
          paddingHorizontal: 20,
          paddingTop: screenHeight * 0.2,
        }}
        onScroll={scrollHandler}
        ref={scrollRef}
        {...baseScrollViewProps}
      >
        <Animated.View style={[translateStyle, { flex: 1 }]}>
          <IndependantTI
            label="Email"
            bottomText="You'll need to verify that you own this email account."
            name="PhoneNumber"
            returnKeyType="next"
            onSubmit={() => chainInput('Username')}
            tiProps={{
              onChangeText: (val) => setEmail(val),
              keyboardType: 'email-address',
              autoComplete: 'email',
              textContentType: 'emailAddress',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 10,
              alignItems: 'center',
            }}
          >
            <Feather name="phone" size={20} color="#bc9df5" />
            <Text18Asap400 style={{ color: '#bc9df5', marginLeft: 10 }}>
              Use phone instead
            </Text18Asap400>
          </View>
          <IndependantTI
            bottomText="This is the name people will know you by on this App. You can always change it later."
            label="Username"
            name="Username"
            returnKeyType="next"
            onSubmit={() => chainInput('Password')}
            tiProps={{
              keyboardType: 'default',
              textContentType: 'username',

              onChangeText: (val) => setUsername(val),
            }}
          />
          <IndependantTI
            bottomText="Strong passwords include a mix of lower case latters, upper case letters, numbers and special characters."
            label="Password"
            name="Password"
            returnKeyType="next"
            tiProps={{
              secureTextEntry: true,
              textContentType: 'password',
              onChangeText: (val) => setPassword(val),
            }}
            onSubmit={() => {
              // scrollTo(scrollRef, 0, 500, true);

              Keyboard.dismiss();

              scrollRef.current?.scrollTo({
                x: 0,
                y: 120,
                animated: true,
              });
              setIsFocused(true);
              uiStore.openBottomSheet({
                snapPoints: [1, 280 + metrics.safeBottomDistance],
                renderContent: () => (
                  <DateTimePickerBottomSheet
                    birthdate={birthdate}
                    setBirthdate={setBirthdate}
                    onPressDone={() => {
                      uiStore.closeBottomSheet();
                      scrollRef.current?.scrollTo({
                        x: 0,
                        y: 0,
                        animated: true,
                      });
                      setIsFocused(false);
                    }}
                  />
                ),
              });
            }}
          />

          <Text18Asap400 style={{ color: 'white', marginBottom: 4 }}>
            Date of Birth
          </Text18Asap400>
          <TouchableOpacity
            style={{
              height: 46,
              width: '100%',
              paddingHorizontal: 8,
              alignItems: 'flex-start',
              justifyContent: 'center',
              backgroundColor: isFocused ? 'black' : '#474747',
              borderWidth: isFocused ? 1 : 0,
              borderColor: isFocused ? '#874BF6' : 'black',
              borderRadius: 6,
            }}
            onPress={() => {
              setIsFocused(true);
              scrollRef.current?.scrollTo({
                x: 0,
                y: 120,
                animated: true,
              });
              uiStore.openBottomSheet({
                snapPoints: [1, 280 + metrics.safeBottomDistance],
                renderContent: () => (
                  <DateTimePickerBottomSheet
                    birthdate={birthdate}
                    setBirthdate={(e) => setBirthdate(e)}
                    onPressDone={() => {
                      uiStore.closeBottomSheet();
                      scrollRef.current?.scrollTo({
                        x: 0,
                        y: 0,
                        animated: true,
                      });
                      setIsFocused(false);
                    }}
                  />
                ),
              });
            }}
          >
            {birthdate < new Date(2012, 0, 1) ? (
              <Text16Asap400 style={{ color: 'white' }}>
                {format(new Date(birthdate), 'PPP')}
              </Text16Asap400>
            ) : null}
          </TouchableOpacity>
        </Animated.View>
      </Animated.ScrollView>
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
            buttonEnabled()
              ? () => Alert.alert('You have successfully signed up!')
              : () => null
          }
          buttonLabel="Sign Up"
          labelColor={buttonEnabled() ? 'white' : '#bdbaba'}
          bgColor={buttonEnabled() ? '#874BF6' : '#474747'}
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

const DateTimePickerBottomSheet = ({
  birthdate,
  setBirthdate,
  onPressDone,
}: {
  birthdate: Date;
  setBirthdate: (date: Date) => void;
  onPressDone: () => void;
}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
      }}
    >
      <View
        style={{
          backgroundColor: '#474747',
          height: 40,
          width: '100%',
          paddingHorizontal: 20,
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity
          onPress={onPressDone}
          style={{
            backgroundColor: '#874BF6',
            height: 40,
            width: 76,
            borderRadius: 6,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text18Asap400 style={{ color: 'white' }}>Done</Text18Asap400>
        </TouchableOpacity>
      </View>
      <DateTimePicker
        display="spinner"
        textColor="white"
        minimumDate={new Date(1900, 0, 1)}
        maximumDate={new Date(2012, 0, 1)}
        value={birthdate}
        mode="date"
        onChange={(e: DateTimePickerEvent, date?: Date) => {
          if (date) {
            setBirthdate(new Date(date));
          }
        }}
      />
    </View>
  );
};
