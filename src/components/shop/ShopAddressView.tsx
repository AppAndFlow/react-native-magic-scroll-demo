import * as React from 'react';
import { MagicScroll } from '@appandflow/rn-magic-scroll';
import { Keyboard, TouchableOpacity, View } from 'react-native';

import ShopTextInput from './ShopTextInput';
import { Text16Normal600, Text22Normal600 } from '../common/typography';
import { useUiStore } from '../../stores/ui';
import HeaderFade from '../common/HeaderFade';
import colors from '../../constants/colors';

const ShopAddressView = () => {
  const uiStore = useUiStore();
  const { chainInput } = MagicScroll.useFormSmartScroll();

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
          <Text16Normal600
            style={{
              color: colors.bottomSheetShopBG,
            }}
          >
            Save
          </Text16Normal600>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={uiStore.closeBottomSheet}
          style={{
            height: 48,
            width: '100%',

            borderRadius: 12,
            marginTop: 12,
            alignItems: 'center',
            marginBottom: 40,
            padding: 14,
          }}
        >
          <Text16Normal600
            style={{
              color: colors.shopLightPurple,
            }}
          >
            Cancel
          </Text16Normal600>
        </TouchableOpacity>
      </MagicScroll.ScrollView>
    </View>
  );
};

export default () => (
  <MagicScroll.SmartScrollView>
    <ShopAddressView />
  </MagicScroll.SmartScrollView>
);
