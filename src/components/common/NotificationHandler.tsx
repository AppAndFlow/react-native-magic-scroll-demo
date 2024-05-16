import * as React from 'react';
import * as Notifications from 'expo-notifications';

import delay from '../../utils/delay';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const NotificationHandler = () => {
  const { onTapNotification } = useNotificationHandler();
  const lastNotificationResponse = Notifications.useLastNotificationResponse();

  const handleNotificationResponse = React.useCallback(
    async (response: Notifications.NotificationResponse) => {
      const notificationPayload = response.notification.request.content
        .data as unknown; // You can type this once you know how your payload will look
      onTapNotification({ notification: notificationPayload });
    },
    [],
  );

  React.useEffect(() => {
    if (
      lastNotificationResponse &&
      lastNotificationResponse.actionIdentifier ===
        Notifications.DEFAULT_ACTION_IDENTIFIER
    ) {
      const handle = async () => {
        await delay(2000);
        handleNotificationResponse(lastNotificationResponse);
      };
      handle();
    }
  }, [lastNotificationResponse, handleNotificationResponse]);

  React.useEffect(() => {
    const subscription = Notifications.addNotificationResponseReceivedListener(
      handleNotificationResponse,
    );
    return () => subscription.remove();
  }, []);

  return <></>;
};

export default NotificationHandler;

export const useNotificationHandler = () => {
  const onTapNotification = ({ notification }: { notification: unknown }) => {
    // Add some custom logic when a notification is taped on.
  };
  return { onTapNotification };
};
