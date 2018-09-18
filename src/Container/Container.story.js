import React from "react";
import { storiesOf } from "@storybook/react";
import { doc } from "storybook-readme";
import createStory from "storybook-construct";

import Container from "./";

class Controller extends Container {
  state = {
    count: 0
  };

  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });
}

let Example = () => (
  <Controller>
    {({ state, increment, decrement }) => (
      <div>
        <h1>{state.count}</h1>

        <button onClick={decrement}>-</button>

        <button onClick={increment}>+</button>
      </div>
    )}
  </Controller>
);

export default createStory("Container", Example, {
  docs: {
    template: require("./docs/index.md")
  }
});
