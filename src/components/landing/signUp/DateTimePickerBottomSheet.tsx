import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';

import { Text18Asap400 } from '../../common/typography';
import colors from '../../../constants/colors';

const DateTimePickerBottomSheet = ({
  birthdate,
  setBirthdate,
  onPressDone,
}: {
  birthdate: Date;
  setBirthdate: (date: Date) => void;
  onPressDone: () => void;
}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
      }}
    >
      <View
        style={{
          backgroundColor: colors.twitchGrey,
          height: 40,
          width: '100%',
          paddingHorizontal: 20,
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity
          onPress={onPressDone}
          style={{
            backgroundColor: colors.twitchPurple,
            height: 40,
            width: 76,
            borderRadius: 6,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text18Asap400 style={{ color: 'white' }}>Done</Text18Asap400>
        </TouchableOpacity>
      </View>
      <DateTimePicker
        display="spinner"
        textColor="white"
        minimumDate={new Date(1900, 0, 1)}
        maximumDate={new Date(2012, 0, 1)}
        value={birthdate}
        mode="date"
        onChange={(e: DateTimePickerEvent, date?: Date) => {
          if (date) {
            setBirthdate(new Date(date));
          }
        }}
      />
    </View>
  );
};

export default DateTimePickerBottomSheet;
