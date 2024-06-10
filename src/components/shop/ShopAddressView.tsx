import * as React from 'react';
import { MagicScroll } from '@appandflow/react-native-magic-scroll';
import { Alert, Keyboard, View } from 'react-native';

import ShopTextInput from './ShopTextInput';
import { Text22Normal600 } from '../common/typography';
import { useUiStore } from '../../stores/ui';
import HeaderFade from '../common/HeaderFade';
import colors from '../../constants/colors';
import ShopButton from './ShopButton';

const ShopAddressView = () => {
  const uiStore = useUiStore();
  const { chainInput } = MagicScroll.useFormSmartScroll();

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
        scollViewProps={{
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
          onSubmit={() => chainInput('LastName')}
          tiProps={{
            placeholder: 'First name',
            autoComplete: 'given-name',
            value: firstName,
            onChangeText: (val) => setFirstName(val),
          }}
        />
        <ShopTextInput
          name="LastName"
          returnKeyType="next"
          onSubmit={() => chainInput('Address')}
          tiProps={{
            placeholder: 'Last name',
            autoComplete: 'family-name',
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
          onSubmit={() => chainInput('Appt')}
          tiProps={{
            placeholder: 'Address',
            autoComplete: 'address-line1',
            value: address,
            onChangeText: (val) => setAddress(val),
          }}
        />
        <ShopTextInput
          name="Appt"
          returnKeyType="next"
          onSubmit={() => chainInput('City')}
          tiProps={{
            placeholder: 'Appartment, suite, etc. (optional)',
            autoComplete: 'address-line2',
            value: appartment,
            onChangeText: (val) => setAppartment(val),
          }}
        />
        <ShopTextInput
          name="City"
          returnKeyType="next"
          onSubmit={() => chainInput('Province')}
          tiProps={{
            placeholder: 'City',
            autoComplete: 'postal-address-locality',
            value: city,
            onChangeText: (val) => setCity(val),
          }}
        />
        <ShopTextInput
          name="Province"
          returnKeyType="next"
          onSubmit={() => chainInput('PostalCode')}
          tiProps={{
            placeholder: 'Province',
            autoComplete: 'postal-address-region',
            value: province,
            onChangeText: (val) => setProvince(val),
          }}
        />
        <ShopTextInput
          name="PostalCode"
          returnKeyType="next"
          onSubmit={() => chainInput('Country')}
          tiProps={{
            placeholder: 'Postal code',
            autoComplete: 'postal-code',
            value: postalCode,
            onChangeText: (val) => setPostalCode(val),
          }}
        />
        <ShopTextInput
          name="Country"
          returnKeyType="next"
          onSubmit={() => chainInput('Phone')}
          tiProps={{
            placeholder: 'Country/Region',
            autoComplete: 'postal-address-country',
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
