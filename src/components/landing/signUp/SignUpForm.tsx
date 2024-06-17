import * as React from 'react';
import { format } from 'date-fns';
import { observer } from 'mobx-react';
import { MagicScroll } from '@appandflow/react-native-magic-scroll';
import { Keyboard, Platform, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';

import metrics from '../../../constants/metrics';
import IndependantTI from '../IndependantTI';
import { Text16Asap400, Text18Asap400 } from '../../common/typography';
import DateTimePickerBottomSheet from './DateTimePickerBottomSheet';
import colors from '../../../constants/colors';
import { useUiStore } from '../../../stores';

const SignUpForm = observer(
  ({ setIsButtonEnabled }: { setIsButtonEnabled: (val: boolean) => void }) => {
    const uiStore = useUiStore();
    const isAndroid = Platform.OS === 'android';
    const { chainInput } = MagicScroll.useFormSmartScroll();

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
      <MagicScroll.ScrollView
        scrollViewProps={{
          bounces: false,
          showsVerticalScrollIndicator: false,
          contentContainerStyle: {
            paddingTop: 60,
            paddingHorizontal: 20,
            flex: 1,
          },
        }}
      >
        <IndependantTI
          label="Email"
          bottomText="You'll need to verify that you own this email account."
          name="PhoneNumber"
          returnKeyType="next"
          chainable="Username"
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
          <Feather name="phone" size={20} color={colors.twitchLightPurple} />
          <Text18Asap400
            style={{ color: colors.twitchLightPurple, marginLeft: 10 }}
          >
            Use phone instead
          </Text18Asap400>
        </View>
        <IndependantTI
          bottomText="This is the name people will know you by on this App. You can always change it later."
          label="Username"
          name="Username"
          returnKeyType="next"
          chainable="Password"
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
            if (isAndroid) {
              DateTimePickerAndroid.open({
                value: birthdate,
                onChange: (e: DateTimePickerEvent, date?: Date) => {
                  if (date) {
                    setBirthdate(new Date(date));
                    setIsFocused(false);
                  }
                },
                display: 'spinner',
                mode: 'date',
                minimumDate: new Date(1900, 0, 1),
                maximumDate: new Date(2012, 0, 1),
              });
            } else {
              setIsFocused(true);

              uiStore.openBottomSheet({
                bottomSheetStyle: { backgroundColor: colors.twitchGrey },
                snapPoints: [1, 280 + metrics.safeBottomDistance],
                renderContent: () => (
                  <DateTimePickerBottomSheet
                    birthdate={birthdate}
                    setBirthdate={setBirthdate}
                    onPressDone={() => {
                      uiStore.closeBottomSheet();

                      setIsFocused(false);
                    }}
                  />
                ),
              });
            }
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
            backgroundColor: isFocused ? 'black' : colors.twitchGrey,
            borderWidth: isFocused ? 1 : 0,
            borderColor: isFocused ? colors.twitchPurple : 'black',
            borderRadius: 6,
          }}
          onPress={() => {
            setIsFocused(true);

            if (isAndroid) {
              DateTimePickerAndroid.open({
                value: birthdate,
                onChange: (e: DateTimePickerEvent, date?: Date) => {
                  if (date) {
                    setBirthdate(new Date(date));
                    setIsFocused(false);
                  }
                },
                display: 'spinner',
                mode: 'date',
                minimumDate: new Date(1900, 0, 1),
                maximumDate: new Date(2012, 0, 1),
              });
            } else {
              uiStore.openBottomSheet({
                snapPoints: [1, 280 + metrics.safeBottomDistance],
                renderContent: () => (
                  <DateTimePickerBottomSheet
                    birthdate={birthdate}
                    setBirthdate={(e) => setBirthdate(e)}
                    onPressDone={() => {
                      uiStore.closeBottomSheet();

                      setIsFocused(false);
                    }}
                  />
                ),
              });
            }
          }}
        >
          {birthdate < new Date(2012, 0, 1) ? (
            <Text16Asap400 style={{ color: 'white' }}>
              {format(new Date(birthdate), 'PPP')}
            </Text16Asap400>
          ) : null}
        </TouchableOpacity>
      </MagicScroll.ScrollView>
    );
  },
);

export default SignUpForm;
