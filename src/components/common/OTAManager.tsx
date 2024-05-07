import * as React from "react";
import * as Updates from "expo-updates";

const OTAManager = () => {
  React.useEffect(() => {
    const forceUpdate = async () => {
      try {
        await Updates.reloadAsync();
      } catch (e) {
        console.warn(e);
      }
    };

    const checkForUpdate = async () => {
      if (__DEV__) {
        return;
      }

      try {
        const update = await Updates.checkForUpdateAsync();
        if (update.isAvailable) {
          // You can add the logic here to change the bahavior when
          // there is an new update pending.
          // For now it just force restart the app.
          forceUpdate();
        }
      } catch (e) {
        console.warn(e);
      }
    };
    setTimeout(checkForUpdate, 100);
  }, []);
  return <></>;
};

export default OTAManager;
