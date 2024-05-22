import * as React from 'react';
import Animated from 'react-native-reanimated';
import { format } from 'date-fns';
import { observer } from 'mobx-react';
import { MagicScroll } from '@appandflow/rn-magic-scroll';
import { Dimensions, Keyboard, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import metrics from '../../../constants/metrics';
import { useUiStore } from '../../../stores/ui';
import IndependantTI from '../IndependantTI';
import { Text16Asap400, Text18Asap400 } from '../../common/typography';
import DateTimePickerBottomSheet from './DateTimePickerBottomSheet';

const SignUpForm = observer(
  ({ setIsButtonEnabled }: { setIsButtonEnabled: (val: boolean) => void }) => {
    const uiStore = useUiStore();
    const {
      scrollHandler,
      scrollRef,
      baseScrollViewProps,
      translateStyle,
      chainInput,
    } = MagicScroll.useFormSmartScroll({ padding: 4 });

    const screenHeight = Dimensions.get('screen').height;

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

    React.useEffect(() => {
      setIsButtonEnabled(buttonEnabled());
    }, [email, username, password, birthdate]);

    return (
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
              value: email,
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
              value: username,
              onChangeText: (val) => setUsername(val),
            }}
          />
          <IndependantTI
            bottomText="Strong passwords include a mix of lower case latters, upper case letters, numbers and special characters."
            label="Password"
            name="Password"
            returnKeyType="next"
            tiProps={{
              value: password,
              secureTextEntry: true,
              textContentType: 'password',
              onChangeText: (val) => setPassword(val),
            }}
            onSubmit={() => {
              Keyboard.dismiss();
              scrollRef.current?.scrollTo({
                x: 0,
                y: 120,
                animated: true,
              });
              setIsFocused(true);
              uiStore.openBottomSheet({
                bottomSheetStyle: { backgroundColor: '#474747' },
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
    );
  },
);

export default SignUpForm;
