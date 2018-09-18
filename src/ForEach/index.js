import React from "react";
import { renderComponent } from "../utils/";

export default ({ items = [], ...props }) =>
  items.map(d => renderComponent(props, d));
