import * as React from 'react';
import { MagicScroll } from '@appandflow/react-native-magic-scroll';
import { Alert, Keyboard, View } from 'react-native';

import ShopTextInput from './ShopTextInput';
import { Text22Normal600 } from '../common/typography';
import HeaderFade from '../common/HeaderFade';
import colors from '../../constants/colors';
import ShopButton from './ShopButton';
import { useUiStore } from '../../stores';

const ShopAddressView = () => {
  const uiStore = useUiStore();

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [appartment, setAppartment] = React.useState('');
  const [city, setCity] = React.useState('');
  const [province, setProvince] = React.useState('');
  const [postalCode, setPostalCode] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const onPressSave = () => {
    if (
      firstName &&
      lastName &&
      address &&
      city &&
      province &&
      postalCode &&
      country !== ''
    ) {
      Alert.alert('Address saved successfully!');
      uiStore.closeBottomSheet();
    } else {
      Alert.alert('Information missing.');
    }
  };

  const onPressCancel = () => {
    uiStore.closeBottomSheet();
    setFirstName('');
    setLastName('');
    setAddress('');
    setAppartment('');
    setCity('');
    setProvince('');
    setPostalCode('');
    setCountry('');
    setCountry('');
    setPhoneNumber('');
  };

  if (!uiStore.isBottomSheetOpen) {
    Keyboard.dismiss();
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.bottomSheetShopBG,
      }}
    >
      <View style={{ height: 32 }}>
        <Text22Normal600
          style={{
            marginBottom: 6,
            marginHorizontal: 20,
          }}
        >
          Add address
        </Text22Normal600>
      </View>
      <HeaderFade style={{ position: 'absolute', top: 32, zIndex: 99 }} />
      <MagicScroll.ScrollView
        scrollViewProps={{
          showsVerticalScrollIndicator: false,
          style: {
            paddingHorizontal: 20,
            paddingTop: 8,
          },
        }}
      >
        <ShopTextInput
          name="FirstName"
          returnKeyType="next"
          chainable="LastName"
          tiProps={{
            placeholder: 'First name',
            autoComplete: 'name',
            keyboardType: 'default',
            value: firstName,
            onChangeText: (val) => setFirstName(val),
          }}
        />
        <ShopTextInput
          name="LastName"
          returnKeyType="next"
          chainable="Address"
          tiProps={{
            placeholder: 'Last name',
            autoComplete: 'family-name',
            keyboardType: 'default',
            value: lastName,
            onChangeText: (val) => setLastName(val),
          }}
        />
        <ShopTextInput
          name="Address"
          returnKeyType="next"
          rightExpoVectorIcon={{
            family: 'Ionicons',
            name: 'search-sharp',
            size: 20,
          }}
          chainable="Appt"
          tiProps={{
            placeholder: 'Address',
            autoComplete: 'address-line1',
            keyboardType: 'default',
            value: address,
            onChangeText: (val) => setAddress(val),
          }}
        />
        <ShopTextInput
          name="Appt"
          returnKeyType="next"
          chainable="City"
          tiProps={{
            placeholder: 'Appartment, suite, etc. (optional)',
            autoComplete: 'address-line2',
            keyboardType: 'default',
            value: appartment,
            onChangeText: (val) => setAppartment(val),
          }}
        />
        <ShopTextInput
          name="City"
          returnKeyType="next"
          chainable="Province"
          tiProps={{
            placeholder: 'City',
            autoComplete: 'off',
            keyboardType: 'default',
            value: city,
            onChangeText: (val) => setCity(val),
          }}
        />
        <ShopTextInput
          name="Province"
          returnKeyType="next"
          chainable="PostalCode"
          tiProps={{
            placeholder: 'Province',
            autoComplete: 'off',
            keyboardType: 'default',
            value: province,
            onChangeText: (val) => setProvince(val),
          }}
        />
        <ShopTextInput
          name="PostalCode"
          returnKeyType="next"
          chainable="Country"
          tiProps={{
            placeholder: 'Postal code',
            autoComplete: 'postal-code',
            keyboardType: 'default',
            value: postalCode,
            onChangeText: (val) => setPostalCode(val),
          }}
        />
        <ShopTextInput
          name="Country"
          returnKeyType="next"
          chainable="Phone"
          tiProps={{
            placeholder: 'Country/Region',
            autoComplete: 'country',
            keyboardType: 'default',
            value: country,
            onChangeText: (val) => setCountry(val),
          }}
        />
        <ShopTextInput
          name="Phone"
          returnKeyType="done"
          onSubmit={Keyboard.dismiss}
          rightExpoVectorIcon={{
            family: 'SimpleLineIcons',
            name: 'question',
            size: 18,
          }}
          tiProps={{
            placeholder: 'Phone (optional)',
            keyboardType: 'phone-pad',
            autoComplete: 'tel',
            value: phoneNumber,
            onChangeText: (val) => setPhoneNumber(val),
          }}
        />

        <ShopButton
          label="Save"
          onPress={onPressSave}
          bgColor="white"
          labelColor={colors.bottomSheetShopBG}
          style={{ marginVertical: 12 }}
        />

        <ShopButton
          label="Cancel"
          bgColor={colors.bottomSheetShopBG}
          onPress={onPressCancel}
          labelColor={colors.shopLightPurple}
          style={{ marginBottom: 40 }}
        />
      </MagicScroll.ScrollView>
    </View>
  );
};

export default ShopAddressView;
