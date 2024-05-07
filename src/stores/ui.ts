import { makeAutoObservable } from 'mobx';
import { useStores } from './useStores';

export interface UiStore {}

class UiClass {
  /**
   @observable exempleVariable: UiStore["exempleVariable"] = false;

   @action
   exempleFunction: UiStore["exempleFunction"] = () => {
     this.splashScreenIsHidden = true;
   };
 */

  constructor() {
    makeAutoObservable(this);
  }
}

export function useUiStore() {
  return useStores().ui;
}

export default UiClass;
