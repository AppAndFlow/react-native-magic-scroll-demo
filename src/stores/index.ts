import React from 'react';
import UiClass from './ui';

/**
 * Add your stores here
 */
export class RootStore {
  ui = new UiClass();
}

export const rootStore = new RootStore();

export const StoreContext = React.createContext<typeof rootStore>(rootStore);

// This store needs to be separated in his own file in order to avoid init error.
// Leave this hook here as the single element of the file.
export function useStores() {
  return React.useContext(StoreContext);
}

export function useUiStore() {
  return useStores().ui;
}
