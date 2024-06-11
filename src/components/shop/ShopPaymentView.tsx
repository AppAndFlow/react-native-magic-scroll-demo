import { MagicScroll } from '@appandflow/react-native-magic-scroll';
import * as React from 'react';
import { Alert, Keyboard, View } from 'react-native';

import { Text14Normal600, Text22Normal600 } from '../common/typography';
import ShopTextInput from './ShopTextInput';
import { useUiStore } from '../../stores/ui';
import HeaderFade from '../common/HeaderFade';
import colors from '../../constants/colors';
import ShopButton from './ShopButton';

const ShopPaymentView = () => {
  const uiStore = useUiStore();
  const { chainInput } = MagicScroll.useFormSmartScroll();

  const [cardNumber, setCardNumber] = React.useState('');
  const [expirationDate, setExpirationDate] = React.useState('');
  const [securityCode, setSecurityCode] = React.useState('');
  const [name, setName] = React.useState('');
  const [nickname, setNickname] = React.useState('');

  const onPressSave = () => {
    if (cardNumber && expirationDate && securityCode && name !== '') {
      Alert.alert('Card saved successfully!');
      uiStore.closeBottomSheet();
    } else {
      Alert.alert('Information missing.');
    }
  };

  const onPressCancel = () => {
    uiStore.closeBottomSheet();
    setCardNumber('');
    setExpirationDate('');
    setSecurityCode('');
    setName('');
    setNickname('');
  };

  return (
    <View
      style={{
        backgroundColor: colors.bottomSheetShopBG,
        paddingHorizontal: 20,
        flex: 1,
      }}
    >
      <View style={{ height: 32 }}>
        <Text22Normal600>Add card</Text22Normal600>
      </View>
      <HeaderFade style={{ position: 'absolute', top: 32, zIndex: 99 }} />
      <MagicScroll.ScrollView
        scollViewProps={{
          bounces: true,
          style: {
            paddingTop: 8,
          },
        }}
      >
        <ShopTextInput
          name="CardNumber"
          returnKeyType="done"
          onSubmit={() => chainInput('ExpirationDate')}
          rightExpoVectorIcon={{
            family: 'Feather',
            name: 'lock',
            size: 20,
          }}
          tiProps={{
            keyboardType: 'decimal-pad',
            placeholder: 'Card number',
            value: cardNumber,
            onChangeText: (val) => setCardNumber(val),
          }}
        />
        <ShopTextInput
          name="ExpirationDate"
          returnKeyType="done"
          onSubmit={() => chainInput('SecurityCode')}
          tiProps={{
            keyboardType: 'decimal-pad',
            placeholder: 'Expiration date (MM/YY)',
            autoComplete: 'cc-exp',
            value: expirationDate,
            onChangeText: (val) => setExpirationDate(val),
          }}
        />
        <ShopTextInput
          name="SecurityCode"
          returnKeyType="done"
          rightExpoVectorIcon={{
            family: 'SimpleLineIcons',
            name: 'question',
            size: 18,
          }}
          onSubmit={() => chainInput('NameOnCard')}
          tiProps={{
            keyboardType: 'decimal-pad',
            placeholder: 'Security code',
            autoComplete: 'cc-csc',
            value: securityCode,
            onChangeText: (val) => setSecurityCode(val),
          }}
        />
        <ShopTextInput
          name="NameOnCard"
          returnKeyType="next"
          onSubmit={() => chainInput('Nickname')}
          tiProps={{
            keyboardType: 'default',
            placeholder: 'Name on card',
            autoComplete: 'cc-name',
            value: name,
            onChangeText: (val) => setName(val),
          }}
        />
        <ShopTextInput
          name="Nickname"
          returnKeyType="done"
          onSubmit={Keyboard.dismiss}
          tiProps={{
            keyboardType: 'default',
            placeholder: 'Nickname (optional)',
            autoComplete: 'nickname',
            value: nickname,
            onChangeText: (val) => setNickname(val),
          }}
        />

        <View style={{ marginVertical: 16 }}>
          <Text14Normal600 style={{ color: colors.lightGrey, marginBottom: 6 }}>
            Bill to
          </Text14Normal600>
          <Text14Normal600>Marjorie Maillé</Text14Normal600>
          <Text14Normal600>1234, street Name</Text14Normal600>
          <Text14Normal600 style={{ color: colors.lightGrey }}>
            Montréal, Qc H1X 2L7
          </Text14Normal600>
        </View>

        <ShopButton
          label="Save"
          bgColor="white"
          labelColor={colors.bottomSheetShopBG}
          onPress={onPressSave}
          style={{ marginVertical: 12 }}
        />

        <ShopButton
          label="Cancel"
          bgColor={colors.bottomSheetShopBG}
          onPress={onPressCancel}
          labelColor={colors.shopLightPurple}
        />
      </MagicScroll.ScrollView>
    </View>
  );
};

export default ShopPaymentView;
