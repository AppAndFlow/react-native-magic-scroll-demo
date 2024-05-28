import * as React from 'react';
import { View } from 'react-native';

import { Text40Asap700 } from '../common/typography';
import colors from '../../constants/colors';
import AppHeader from './AppHeader';

const firstRowTexts = [
  {
    text: 'FortNite',
    color: colors.twitchDarkPurple,
  },
  {
    text: 'Games',
    color: 'white',
  },
  {
    text: 'Half Life',
    color: colors.twitchDarkPurple,
  },
  {
    text: 'Baldurs Gate',
    color: colors.twitchDarkPurple,
  },
];

const secondRowTexts = [
  {
    text: 'Hip Hop',
    color: colors.twitchDarkPurple,
  },
  {
    text: 'Music',
    color: 'white',
  },
  {
    text: 'Classic',
    color: colors.twitchDarkPurple,
  },
  {
    text: 'Rock N Roll',
    color: colors.twitchDarkPurple,
  },
];

const thirdRowTexts = [
  {
    text: 'Biology',
    color: colors.twitchDarkPurple,
  },
  {
    text: 'Talk Shows',
    color: 'white',
  },
  {
    text: 'History',
    color: colors.twitchDarkPurple,
  },
  {
    text: 'Education',
    color: colors.twitchDarkPurple,
  },
];

const fourthRowTexts = [
  {
    text: 'Basketball',
    color: colors.twitchDarkPurple,
  },
  {
    text: 'Sports',
    color: 'white',
  },
  {
    text: 'Football',
    color: colors.twitchDarkPurple,
  },
  {
    text: 'Hockey',
    color: colors.twitchDarkPurple,
  },
];

const fifthRowTexts = [
  {
    text: 'Something',
    color: colors.twitchDarkPurple,
  },
  {
    text: 'Travel & Outdoors',
    color: 'white',
  },
  {
    text: 'Exploration',
    color: colors.twitchDarkPurple,
  },
];

const sixthRowTexts = [
  {
    text: 'Chatting',
    color: colors.twitchDarkPurple,
  },
  {
    text: 'Just Chatting',
    color: 'white',
  },
  {
    text: 'News',
    color: colors.twitchDarkPurple,
  },
  {
    text: 'Meditation',
    color: colors.twitchDarkPurple,
  },
];

const seventhRowTexts = [
  {
    text: 'Mukbang',
    color: colors.twitchDarkPurple,
  },
  {
    text: 'Food & Drink',
    color: 'white',
  },
  {
    text: 'Social',
    color: colors.twitchDarkPurple,
  },
  {
    text: 'Eating',
    color: colors.twitchDarkPurple,
  },
];

const eighthRowTexts = [
  {
    text: 'Socials',
    color: colors.twitchDarkPurple,
  },
  {
    text: 'Special Events',
    color: 'white',
  },
  {
    text: 'Sports',
    color: colors.twitchDarkPurple,
  },
  {
    text: 'Gala',
    color: colors.twitchDarkPurple,
  },
];

const TextBackground = () => {
  return (
    <View style={{ marginLeft: -40 }}>
      <View style={{ flexDirection: 'row', marginLeft: -28, gap: 8 }}>
        {firstRowTexts.map((text) => {
          return (
            <Text40Asap700 style={{ color: text.color }} key={text.text}>
              {text.text}
            </Text40Asap700>
          );
        })}
      </View>
      <View style={{ flexDirection: 'row', marginLeft: -26, gap: 8 }}>
        {secondRowTexts.map((text) => {
          return (
            <Text40Asap700 style={{ color: text.color }} key={text.text}>
              {text.text}
            </Text40Asap700>
          );
        })}
      </View>
      <View style={{ flexDirection: 'row', marginLeft: -20, gap: 8 }}>
        {thirdRowTexts.map((text) => {
          return (
            <Text40Asap700 style={{ color: text.color }} key={text.text}>
              {text.text}
            </Text40Asap700>
          );
        })}
      </View>
      <View style={{ flexDirection: 'row', marginLeft: -64, gap: 8 }}>
        {fourthRowTexts.map((text) => {
          return (
            <Text40Asap700 style={{ color: text.color }} key={text.text}>
              {text.text}
            </Text40Asap700>
          );
        })}
      </View>
      <View style={{ flexDirection: 'row', marginLeft: -64, gap: 8 }}>
        {fifthRowTexts.map((text) => {
          return (
            <Text40Asap700 style={{ color: text.color }} key={text.text}>
              {text.text}
            </Text40Asap700>
          );
        })}
      </View>
      <View style={{ flexDirection: 'row', marginLeft: -32, gap: 8 }}>
        {sixthRowTexts.map((text) => {
          return (
            <Text40Asap700 style={{ color: text.color }} key={text.text}>
              {text.text}
            </Text40Asap700>
          );
        })}
      </View>
      <View style={{ flexDirection: 'row', marginLeft: -42, gap: 8 }}>
        {seventhRowTexts.map((text) => {
          return (
            <Text40Asap700 style={{ color: text.color }} key={text.text}>
              {text.text}
            </Text40Asap700>
          );
        })}
      </View>
      <View style={{ flexDirection: 'row', marginLeft: -8, gap: 8 }}>
        {eighthRowTexts.map((text) => {
          return (
            <Text40Asap700 style={{ color: text.color }} key={text.text}>
              {text.text}
            </Text40Asap700>
          );
        })}
      </View>
    </View>
  );
};

export default TextBackground;
