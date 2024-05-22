import { MagicScroll } from '@appandflow/rn-magic-scroll';
import * as React from 'react';
import { Keyboard, TouchableOpacity, View } from 'react-native';
import { TextNormal } from '../common/typography';
import metrics from '../../constants/metrics';
import ShopTextInput from './ShopTextInput';
import { useUiStore } from '../../stores/ui';

const ShopPaymentView = () => {
  const uiStore = useUiStore();
  const { chainInput } = MagicScroll.useFormSmartScroll();
  return (
    <MagicScroll.ScrollView
      scollViewProps={{
        bounces: false,
        style: {
          backgroundColor: '#1c1c1c',
          paddingHorizontal: 20,
          flex: 1,
          paddingTop: 8,
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
        Add card
      </TextNormal>
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
        <TextNormal style={{ color: '#bebebe', fontSize: 14, marginBottom: 6 }}>
          Bill to
        </TextNormal>
        <TextNormal style={{ color: 'white', fontSize: 14, fontWeight: '600' }}>
          Marjorie Maillé
        </TextNormal>
        <TextNormal style={{ color: 'white', fontSize: 14, fontWeight: '600' }}>
          1234, street Name
        </TextNormal>
        <TextNormal
          style={{ color: '#bebebe', fontSize: 14, fontWeight: '600' }}
        >
          Montréal, Qc H1X 2L7
        </TextNormal>
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
        <TextNormal style={{ color: 'black', fontSize: 16, fontWeight: '500' }}>
          Save
        </TextNormal>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={uiStore.closeBottomSheet}
        style={{
          height: 48,
          width: '100%',
          backgroundColor: '#1c1c1c',
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

export default ShopPaymentView;
