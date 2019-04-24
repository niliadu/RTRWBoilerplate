import store from "../store/storeConfigs";

export class Action {
  constructor(public type: Actions, public data?: any) {}
}

export type Actions = "ONE_ACTION";

export function dispatchAction(action: Action) {
  //Error: Actions must be plain objects
  //That is why this exists
  store.dispatch({ ...action });
}
