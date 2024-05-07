import { LogBox } from 'react-native';
import App from './src/components/App';
import * as SplashScreen from 'expo-splash-screen';

const REQUIRE_CIRCLE_MOBX = new RegExp(
  `Require cycle: src/components/App.tsx -> src/stores/index.ts`,
);

LogBox.ignoreLogs([REQUIRE_CIRCLE_MOBX]);

SplashScreen.preventAutoHideAsync();

export default App;
