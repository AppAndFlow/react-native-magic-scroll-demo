import { MagicScroll } from '@appandflow/rn-magic-scroll';
import * as React from 'react';
import { Keyboard, TouchableOpacity, View } from 'react-native';

import {
  Text14Normal600,
  Text16Normal600,
  Text22Normal600,
} from '../common/typography';
import ShopTextInput from './ShopTextInput';
import { useUiStore } from '../../stores/ui';
import HeaderFade from '../common/HeaderFade';
import colors from '../../constants/colors';

const ShopPaymentView = () => {
  const uiStore = useUiStore();
  const { chainInput } = MagicScroll.useFormSmartScroll();
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
            backgroundColor: colors.bottomSheetShopBG,
            borderRadius: 12,
            marginTop: 12,
            alignItems: 'center',

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

export default ShopPaymentView;
