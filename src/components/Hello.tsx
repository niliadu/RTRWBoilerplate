import * as React from "react";
import * as exampleActions from "../redux/actions/exampleActions";
import { mapTypedStateToProps } from "../redux/store/storeConfigs";
import { exampleState } from "../redux/reducers/exampleReducer";

class LocalStore {
  fromStore?: { example: exampleState };
}

export interface Props extends LocalStore {
  name: string;
}

export class State {
  clicked: number = 0;
}

class Hello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = new State();

    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick() {
    this.setState({ clicked: this.state.clicked + 1 });
    exampleActions.callOneAction();
  }
  render() {
    const mappedList = this.props.fromStore.example.valueOne.map((val, i) => <li key={i}>{val}</li>);
    return (
      <>
        <h1>Hello {this.props.name}!</h1>
        <h3>We have successfully setup our React, Webpack, Typescript and Redux project!</h3>
        <h4>Clicked: {this.state.clicked} times</h4>
        <button onClick={this.buttonClick}>TEST</button>
        <ul>{mappedList}</ul>
      </>
    );
  }
}

const connect = mapTypedStateToProps(
  (store): LocalStore => {
    return {
      fromStore: {
        example: store.example
      }
    };
  }
);

export default connect(Hello);
