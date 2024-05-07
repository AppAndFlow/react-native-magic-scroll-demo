import { Dimensions, Platform } from 'react-native';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const isLargeDevice = windowHeight >= 812;
const isSmallDevice = windowWidth < 375;

export default {
  isAndroid: Platform.OS === 'android',
  isIOS: Platform.OS === 'ios',
  windowWidth,
  windowHeight,
  isLargeDevice,
  isSmallDevice,
};
