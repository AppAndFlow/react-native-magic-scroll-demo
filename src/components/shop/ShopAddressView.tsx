import * as React from 'react';
import ShopTextInput from './ShopTextInput';
import { TextNormal } from '../common/typography';
import { MagicScroll } from '@appandflow/rn-magic-scroll';
import { Dimensions, Keyboard, TouchableOpacity } from 'react-native';
import metrics from '../../constants/metrics';
import { useUiStore } from '../../stores/ui';

const ShopAddressView = () => {
  const uiStore = useUiStore();
  const { chainInput } = MagicScroll.useFormSmartScroll();

  const screenHeight = Dimensions.get('screen').height;

  return (
    <MagicScroll.ScrollView
      scollViewProps={{
        style: {
          backgroundColor: '#474747',
          paddingHorizontal: 20,
          flex: 1,
          paddingTop: 8,
          marginBottom: metrics.safeBottomDistance,
        },
      }}
    >
      <TextNormal
        style={{
          color: 'white',
          fontSize: 22,
          fontWeight: '600',
          marginBottom: 12,
        }}
      >
        Add address
      </TextNormal>
      <ShopTextInput
        name="FirstName"
        returnKeyType="next"
        onSubmit={() => chainInput('LastName')}
        tiProps={{ placeholder: 'First name', autoComplete: 'name' }}
      />
      <ShopTextInput
        name="LastName"
        returnKeyType="next"
        onSubmit={() => chainInput('Address')}
        tiProps={{ placeholder: 'Last name', autoComplete: 'family-name' }}
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
        tiProps={{ placeholder: 'Address', autoComplete: 'address-line1' }}
      />
      <ShopTextInput
        name="Appt"
        returnKeyType="next"
        onSubmit={() => chainInput('City')}
        tiProps={{
          placeholder: 'Appartment, suite, etc. (optional)',
          autoComplete: 'address-line2',
        }}
      />
      <ShopTextInput
        name="City"
        returnKeyType="next"
        onSubmit={() => chainInput('Province')}
        tiProps={{
          placeholder: 'City',
          autoComplete: 'postal-address-locality',
        }}
      />
      <ShopTextInput
        name="Province"
        returnKeyType="next"
        onSubmit={() => chainInput('PostalCode')}
        tiProps={{
          placeholder: 'Province',
          autoComplete: 'postal-address-region',
        }}
      />
      <ShopTextInput
        name="PostalCode"
        returnKeyType="next"
        onSubmit={() => chainInput('Country')}
        tiProps={{ placeholder: 'Postal code', autoComplete: 'postal-code' }}
      />
      <ShopTextInput
        name="Country"
        returnKeyType="next"
        onSubmit={() => chainInput('Phone')}
        tiProps={{
          placeholder: 'Country/Region',
          autoComplete: 'postal-address-country',
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
        }}
      />
      <TouchableOpacity
        style={{
          height: 48,
          width: '100%',
          backgroundColor: 'white',
          borderRadius: 12,
          marginTop: 12,
          alignItems: 'center',

          padding: 14,
        }}
      >
        <TextNormal style={{ color: 'black', fontSize: 16, fontWeight: '500' }}>
          Save
        </TextNormal>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={uiStore.closeBottomSheet}
        style={{
          height: 48,
          width: '100%',
          backgroundColor: '#474747',
          borderRadius: 12,
          marginTop: 12,
          alignItems: 'center',

          padding: 14,
        }}
      >
        <TextNormal
          style={{
            color: '#dbaff9',
            fontSize: 16,
            fontWeight: '500',
          }}
        >
          Cancel
        </TextNormal>
      </TouchableOpacity>
    </MagicScroll.ScrollView>
  );
};

export default () => (
  <MagicScroll.SmartScrollView>
    <ShopAddressView />
  </MagicScroll.SmartScrollView>
);
