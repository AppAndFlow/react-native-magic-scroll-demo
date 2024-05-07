import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
// import * as Sentry from "sentry-expo";
import * as Updates from 'expo-updates';
import { Box } from 'react-native-design-utility';

// import { rootStore } from "../../stores";

// This is a good place to add Sentry.
/*
Sentry.init({
  dsn: "",
  enableInExpoDevelopment: false,
  debug: true,
});
*/

class ErrorHandler extends React.Component<any> {
  state = {
    didCatchError: false,
    error: null,
  };

  static getDerivedStateFromError(error: any) {
    return { didCatchError: error };
  }

  componentDidCatch(e: Error) {
    if (!__DEV__) {
      //   const me = rootStore.user.getMe([
      //     "id",
      //     "firstName",
      //     "lastName",
      //     "username",
      //   ]);

      //   if (me) {
      //     Sentry.Native.configureScope(function (scope) {
      //       scope.setUser({
      //         username: me.username,
      //         userId: me.id,
      //         name: `${me.firstName} ${me.lastName}`,
      //       });
      //     });
      //   }

      //   Sentry.Native.captureException(e);

      this.setState({ error: true });
    } else {
      console.warn(e);
    }
  }

  render() {
    if (this.state.didCatchError) {
      return (
        <Box
          bg="blue"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              alignSelf: 'center',
              marginBottom: 25,
              color: 'white',
              maxWidth: 300,
              fontSize: 28,
            }}
          >
            An error has occurred. Please restart the App.
          </Text>

          <TouchableOpacity onPress={Updates.reloadAsync}>
            <Text
              style={{
                textDecorationLine: 'underline',
                alignSelf: 'center',
                marginBottom: 25,
                color: 'white',
                maxWidth: 300,
                fontSize: 32,
              }}
            >
              Restart App
            </Text>
          </TouchableOpacity>
        </Box>
      );
    }

    return <>{this.props.children}</>;
  }
}

export default ErrorHandler;
