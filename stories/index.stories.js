import React, { Fragment } from "react";

import { configure,  addDecorator } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";

let req = require.context('../src/', true, /story\.js$/)

let loadStories = () => req.keys().forEach(req)

addDecorator(story => story())

configure(loadStories, module)
