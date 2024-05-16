import * as React from 'react';
import { View } from 'react-native';
import { Text40Asap700 } from '../common/typography';

const firstRowTexts = [
  {
    text: 'FortNite',
    color: '#6235b7',
  },
  {
    text: 'Games',
    color: 'white',
  },
  {
    text: 'Half Life',
    color: '#6235b7',
  },
  {
    text: 'Baldurs Gate',
    color: '#6235b7',
  },
];

const secondRowTexts = [
  {
    text: 'Hip Hop',
    color: '#6235b7',
  },
  {
    text: 'Music',
    color: 'white',
  },
  {
    text: 'Classic',
    color: '#6235b7',
  },
  {
    text: 'Rock N Roll',
    color: '#6235b7',
  },
];

const thirdRowTexts = [
  {
    text: 'Biology',
    color: '#6235b7',
  },
  {
    text: 'Talk Shows',
    color: 'white',
  },
  {
    text: 'History',
    color: '#6235b7',
  },
  {
    text: 'Education',
    color: '#6235b7',
  },
];

const fourthRowTexts = [
  {
    text: 'Basketball',
    color: '#6235b7',
  },
  {
    text: 'Sports',
    color: 'white',
  },
  {
    text: 'Football',
    color: '#6235b7',
  },
  {
    text: 'Hockey',
    color: '#6235b7',
  },
];

const fifthRowTexts = [
  {
    text: 'Something',
    color: '#6235b7',
  },
  {
    text: 'Travel & Outdoors',
    color: 'white',
  },
  {
    text: 'Exploration',
    color: '#6235b7',
  },
];

const sixthRowTexts = [
  {
    text: 'Chatting',
    color: '#6235b7',
  },
  {
    text: 'Just Chatting',
    color: 'white',
  },
  {
    text: 'News',
    color: '#6235b7',
  },
  {
    text: 'Meditation',
    color: '#6235b7',
  },
];

const seventhRowTexts = [
  {
    text: 'Mukbang',
    color: '#6235b7',
  },
  {
    text: 'Food & Drink',
    color: 'white',
  },
  {
    text: 'Social',
    color: '#6235b7',
  },
  {
    text: 'Eating',
    color: '#6235b7',
  },
];

const eighthRowTexts = [
  {
    text: 'Socials',
    color: '#6235b7',
  },
  {
    text: 'Special Events',
    color: 'white',
  },
  {
    text: 'Sports',
    color: '#6235b7',
  },
  {
    text: 'Gala',
    color: '#6235b7',
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
