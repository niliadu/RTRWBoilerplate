import { Action, dispatchAction } from "./actionsTypes";

export function callOneAction() {
  dispatchAction(new Action("ONE_ACTION", "any data"));
}
