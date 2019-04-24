import { Action } from "../actions/actionsTypes";

export class exampleState {
  valueOne: number[] = [];
}

export default function example(state = new exampleState(), action: Action) {
  let newState;
  switch (action.type) {
    case "ONE_ACTION": {
      let { valueOne } = state;
      valueOne.push(valueOne.length);
      newState = {
        ...state,
        valueOne
      };
      break;
    }
    default: {
      newState = state;
    }
  }
  return newState;
}
