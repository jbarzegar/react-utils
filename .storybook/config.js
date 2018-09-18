import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withDocs } from "storybook-readme";

let decorators = [withKnobs];

// automatically import all files ending in *.story.js
let req = require.context("../src", true, /.story.js$/);

decorators.forEach(addDecorator);

configure(() => req.keys().forEach(req), module);
