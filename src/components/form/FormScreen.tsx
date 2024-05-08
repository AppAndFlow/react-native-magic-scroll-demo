import * as React from 'react';
import { Dimensions, Keyboard, Text, View } from 'react-native';
import { MagicScroll } from '@appandflow/rn-magic-scroll';

const FormScreen = () => {
  const { chainInput } = MagicScroll.useFormSmartScroll();

  const screenWidth = Dimensions.get('screen').width;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#a8f9d8',
      }}
    >
      <View
        style={{
          height: 120,
          width: screenWidth,
          backgroundColor: '#e2f8ed',
          borderBottomWidth: 2,
          borderBottomColor: '#49c09b',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <Text style={{ fontSize: 36, fontWeight: '600' }}>Form</Text>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 20,
        }}
      >
        <MagicScroll.ScrollView>
          <MagicScroll.TextInput
            key={'FirstName'}
            name="FirstName"
            renderTop={() => (
              <Text style={{ fontSize: 18, paddingLeft: 10 }}>First Name</Text>
            )}
            containerStyle={{ marginBottom: 24 }}
            textInputProps={{
              returnKeyType: 'next',
              onSubmitEditing: () => chainInput('LastName'),
              textAlignVertical: 'center',
              textAlign: 'left',
              style: {
                height: 50,
                width: '100%',
                backgroundColor: '#cdf7e1',
                borderWidth: 2,
                borderColor: '#49c09b',
                borderRadius: 12,
                padding: 12,
              },
            }}
          />
          <MagicScroll.TextInput
            key={'LastName'}
            name="LastName"
            renderTop={() => (
              <Text style={{ fontSize: 18, paddingLeft: 10 }}>Last Name</Text>
            )}
            containerStyle={{ marginBottom: 24 }}
            textInputProps={{
              returnKeyType: 'next',
              textAlignVertical: 'center',
              textAlign: 'left',
              onSubmitEditing: () => chainInput('Username'),
              style: {
                height: 50,
                width: '100%',
                backgroundColor: '#cdf7e1',
                borderWidth: 2,
                borderColor: '#49c09b',
                borderRadius: 12,
                padding: 12,
              },
            }}
          />
          <MagicScroll.TextInput
            key={'Username'}
            name="Username"
            renderTop={() => (
              <Text style={{ fontSize: 18, paddingLeft: 10 }}>Username</Text>
            )}
            containerStyle={{ marginBottom: 24 }}
            textInputProps={{
              onSubmitEditing: () => chainInput('Birthday'),
              returnKeyType: 'next',
              textAlignVertical: 'center',
              textAlign: 'left',
              style: {
                height: 50,
                width: '100%',
                backgroundColor: '#cdf7e1',
                borderWidth: 2,
                borderColor: '#49c09b',
                borderRadius: 12,
                padding: 12,
              },
            }}
          />
          <MagicScroll.TextInput
            key={'Birthday'}
            name="Birthday"
            renderTop={() => (
              <Text style={{ fontSize: 18, paddingLeft: 10 }}>Birthday</Text>
            )}
            containerStyle={{ marginBottom: 24 }}
            textInputProps={{
              returnKeyType: 'next',
              textAlignVertical: 'center',
              textAlign: 'left',
              textContentType: 'birthdate',
              onSubmitEditing: () => chainInput('Country'),
              style: {
                height: 50,
                width: '100%',
                backgroundColor: '#cdf7e1',
                borderWidth: 2,
                borderColor: '#49c09b',
                borderRadius: 12,
                padding: 12,
              },
            }}
          />
          <MagicScroll.TextInput
            key={'Country'}
            name="Country"
            renderTop={() => (
              <Text style={{ fontSize: 18, paddingLeft: 10 }}>Country</Text>
            )}
            containerStyle={{ marginBottom: 24 }}
            textInputProps={{
              returnKeyType: 'next',
              textAlignVertical: 'center',
              textAlign: 'left',
              onSubmitEditing: () => chainInput('ShortBio'),
              style: {
                height: 50,
                width: '100%',
                backgroundColor: '#cdf7e1',
                borderWidth: 2,
                borderColor: '#49c09b',
                borderRadius: 12,
                padding: 12,
              },
            }}
          />

          <MagicScroll.TextInput
            key={'ShortBio'}
            name="ShortBio"
            renderBottom={() => (
              <Text
                style={{
                  color: '#276853',
                  textAlign: 'right',
                  paddingRight: 10,
                }}
              >
                Tell us a little bit about you
              </Text>
            )}
            renderTop={() => (
              <Text style={{ fontSize: 18, paddingLeft: 10 }}>Short Bio</Text>
            )}
            textInputProps={{
              textAlignVertical: 'center',
              textAlign: 'left',
              onSubmitEditing: () => Keyboard.dismiss(),
              style: {
                height: 50,
                width: '100%',
                backgroundColor: '#cdf7e1',
                borderWidth: 2,
                borderColor: '#49c09b',
                borderRadius: 12,
                padding: 12,
              },
            }}
          />
        </MagicScroll.ScrollView>
      </View>
    </View>
  );
};

//export default MagicScroll.withSmartScroll(FormScreen);

export default () => (
  <MagicScroll.SmartScrollView>
    <FormScreen />
  </MagicScroll.SmartScrollView>
);
