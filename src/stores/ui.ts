import { action, makeAutoObservable } from 'mobx';
import { Keyboard, ViewStyle } from 'react-native';
import { AnimatedStyle, SharedValue } from 'react-native-reanimated';
import metrics from '../constants/metrics';
import { useStores } from './useStores';
import { BOTTOM_SHEET_POPUP_ANIMATION_TIME } from '../components/common/BottomSheet';

const DEFAULT_BOTTOM_SHEET_SNAP_POINTS = [1, 300 + metrics.safeBottomDistance];
interface OpenBottomSheetOps {
  renderContent: () => React.ReactNode;
  snapPoints?: number[];
  containerStyle?: ViewStyle;
  bottomSheetGorhomProps?: any;
  bottomInset?: number;
  bottomSheetStyle?: AnimatedStyle;
}
export interface UiStore {
  openBottomSheet: (options: OpenBottomSheetOps) => void;
  closeBottomSheet: () => void;
  isBottomSheetOpen: boolean;
  bottomSheetContentRenderer?: OpenBottomSheetOps['renderContent'];
  bottomSheetSnapPoints: number[];
  containerStyle: ViewStyle;
  bottomSheetGorhomProps: any;

  bottomSheetSharedValue?: SharedValue<number>;
  setBottomSheetSharedValue: (sharedValue: SharedValue<number>) => void;

  bottomSheetTargetSharedValue: number;
  setBottomSheetTargetSharedValue: (targetSharedValue: number) => void;
}

class UiClass {
  // ---------------- BottomSheet ----------------
  bottomSheetContentRenderer: UiStore['bottomSheetContentRenderer'];
  bottomSheetDebouncedDelay = false;
  bottomSheetBottomInset = 0;
  isBottomSheetOpen: UiStore['isBottomSheetOpen'] = false;

  bottomSheetSharedValue: UiStore['bottomSheetSharedValue'] = undefined;

  bottomSheetSnapPoints: UiStore['bottomSheetSnapPoints'] =
    DEFAULT_BOTTOM_SHEET_SNAP_POINTS;
  containerStyle: UiStore['containerStyle'] = {};
  bottomSheetGorhomProps: UiStore['bottomSheetGorhomProps'] = {};
  bottomSheetStyle: OpenBottomSheetOps['bottomSheetStyle'] = undefined;

  setBottomSheetSharedValue: UiStore['setBottomSheetSharedValue'] = action(
    (sharedValue) => {
      this.bottomSheetSharedValue = sharedValue;
    },
  );

  bottomSheetTargetSharedValue: UiStore['bottomSheetTargetSharedValue'] = 0;

  setBottomSheetTargetSharedValue: UiStore['setBottomSheetTargetSharedValue'] =
    action((targetSharedValue) => {
      this.bottomSheetTargetSharedValue = targetSharedValue;
    });

  openBottomSheet: UiStore['openBottomSheet'] = action((options) => {
    if (!this.isBottomSheetOpen && !this.bottomSheetDebouncedDelay) {
      Keyboard.dismiss();
      this.bottomSheetDebouncedDelay = true;
      this.bottomSheetContentRenderer = options.renderContent;
      if (options.snapPoints) {
        this.bottomSheetSnapPoints = options.snapPoints;
      }
      if (options.containerStyle) {
        this.containerStyle = options.containerStyle;
      }
      if (options.bottomSheetGorhomProps) {
        this.bottomSheetGorhomProps = options.bottomSheetGorhomProps;
      }
      if (options.bottomSheetStyle) {
        this.bottomSheetStyle = options.bottomSheetStyle;
      }

      this.bottomSheetBottomInset = options.bottomInset || 0;

      this.isBottomSheetOpen = true;
    }
  });

  closeBottomSheet: UiStore['closeBottomSheet'] = action(() => {
    if (this.isBottomSheetOpen) {
      this.isBottomSheetOpen = false;

      this.bottomSheetSnapPoints = DEFAULT_BOTTOM_SHEET_SNAP_POINTS;
      this.containerStyle = {};
      this.bottomSheetGorhomProps = {};

      setTimeout(() => {
        this.bottomSheetDebouncedDelay = false;
        this.bottomSheetContentRenderer = undefined;
      }, BOTTOM_SHEET_POPUP_ANIMATION_TIME + 50);

      setTimeout(() => {
        this.bottomSheetBottomInset = 0;
      }, BOTTOM_SHEET_POPUP_ANIMATION_TIME + 350);
    }
  });

  // ---------------- ----------------

  constructor() {
    makeAutoObservable(this);
  }
}

export function useUiStore() {
  return useStores().ui;
}

export default UiClass;
