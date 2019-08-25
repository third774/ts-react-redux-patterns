import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../store";
import { countSelector } from "./counterSelectors";
import counterActions from "./counterActions";
import Button from "../common/Button";

// These are props that we expect to receive from a parent
type Props = {
  title: string;
};

// These props are provided by Redux. Note that their type
// information is derived from the connector. This means if
// the mapStateToProps function changes, the type information
// is automatically propagated.
type PropsFromRedux = ConnectedProps<typeof connector>;
const connector = connect(
  (state: RootState, ownProps: Props) => ({
    count: countSelector(state)
  }),
  counterActions
);

// The two types are intersected here (Props & PropsFromRedux)
const Counter: React.FC<Props & PropsFromRedux> = ({
  title,
  count,
  increment,
  decrement
}) => {
  return (
    <div>
      <h1>{title}</h1>
      {count}
      <Button onClick={decrement}>-</Button>
      <Button onClick={increment}>+</Button>
    </div>
  );
};

export default connector(Counter);
