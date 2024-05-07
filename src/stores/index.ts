import UiClass from './ui';

/**
 * Add your stores here
 */
export class RootStore {
  ui = new UiClass();
}

export const rootStore = new RootStore();
