import React from "react";
import { storiesOf } from "@storybook/react";

import * as knobs from "@storybook/addon-knobs";
import constructStory, { createKnob } from "storybook-construct";

export default storiesOf("Container", module).add(
  "Default",
  constructStory(() => <h1>Container</h1>, require("./readme.md"))
);
