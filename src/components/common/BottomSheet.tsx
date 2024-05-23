import * as React from 'react';
import BottomSheetGorhom from '@gorhom/bottom-sheet';
import { Box } from 'react-native-design-utility';
import { observer } from 'mobx-react';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  interpolate,
} from 'react-native-reanimated';
import { Dimensions, Platform, View } from 'react-native';
import { toJS } from 'mobx';

import { useUiStore } from '../../stores/ui';
import colors from '../../constants/colors';

export const BOTTOM_SHEET_POPUP_ANIMATION_TIME = 250;

// Centralized props used to style the top section of the BottomSheetGorhom.
export const greenBottomSheetGorhomProps = {
  backgroundStyle: {
    backgroundColor: '#434242',
  },
  handleStyle: {
    backgroundColor: '#8d8c8c',
  },
  handleIndicatorStyle: {
    backgroundColor: '#8d8c8c',
    width: 34,
    height: 8,
    borderWidth: 1,
    borderColor: 'black',
  },
};

const BottomSheet = observer(() => {
  const uiStore = useUiStore();

  const bottomSheetRef = React.useRef<BottomSheetGorhom>(null);

  const bottomSheetGorhomProps = toJS(uiStore.bottomSheetGorhomProps);

  const bottomInset = uiStore.bottomSheetBottomInset || 0;

  const deviceHeight = Dimensions.get('window').height;

  const animatedBottomSheetNode = useSharedValue(0);
  const containerAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      animatedBottomSheetNode.value,
      [0, 0.5, 1],
      [0, 0.15, 0.3],
    );
    const bottom = interpolate(
      animatedBottomSheetNode.value,
      [0, 0.01, 1],
      [deviceHeight, 0, 0],
    );
    return {
      opacity,
      bottom,
    };
  });

  React.useEffect(() => {
    if (!uiStore.isBottomSheetOpen) {
      close();
    } else if (uiStore.isBottomSheetOpen) {
      open();
    }
  }, [uiStore.isBottomSheetOpen]);

  const open = () => {
    bottomSheetRef.current?.snapToIndex(1);
  };

  const close = () => {
    bottomSheetRef.current?.snapToIndex(0);
  };

  return (
    <>
      <Reanimated.View
        onTouchEndCapture={() => {
          if (uiStore.isBottomSheetOpen) {
            uiStore.closeBottomSheet();
          }
        }}
        style={[
          {
            backgroundColor: 'black',
            opacity: 0,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
          },
          containerAnimatedStyle,
        ]}
      />
      <BottomSheetGorhom
        ref={bottomSheetRef}
        snapPoints={uiStore.bottomSheetSnapPoints.slice()}
        enablePanDownToClose={true}
        enableHandlePanningGesture={Platform.OS === 'android' && 'ios'}
        index={0}
        bottomInset={bottomInset}
        handleStyle={{
          backgroundColor: colors.twitchGrey,
        }}
        handleComponent={() => (
          <Box
            style={{
              marginTop: 8,
              marginBottom: 16,
              alignSelf: 'center',
              height: 6,
              width: 50,
              borderRadius: 3,
              backgroundColor: colors.lightGrey,
            }}
          />
        )}
        backgroundComponent={() => (
          <View style={{ flex: 1, backgroundColor: colors.twitchGrey }} />
        )}
        handleIndicatorStyle={{ backgroundColor: colors.twitchGrey }}
        style={{
          borderRadius: 18,
          overflow: 'hidden',
          backgroundColor: colors.twitchGrey,
          ...uiStore.bottomSheetStyle,
        }}
        animatedIndex={animatedBottomSheetNode}
        onChange={(index) => {
          if (index <= 0 && uiStore.isBottomSheetOpen) {
            uiStore.closeBottomSheet();
          }
        }}
        onAnimate={(_, toIndex) => {
          // Sometimes (toIndex === -1) and we only want 0 as a minimum
          const properIndex = toIndex <= 0 ? 0 : toIndex;

          uiStore.setBottomSheetTargetSharedValue(properIndex);
        }}
        {...bottomSheetGorhomProps}
      >
        <Box flex={1} opacity={1} bg={colors.twitchGrey}>
          {uiStore.bottomSheetContentRenderer?.()}
        </Box>
      </BottomSheetGorhom>
    </>
  );
});

export default BottomSheet;
