import React from 'react';
import { StoreContext } from '../components/App';

// This store needs to be separated in his own file in order to avoid init error.
// Leave this hook here as the single element of the file.
export function useStores() {
  return React.useContext(StoreContext);
}
