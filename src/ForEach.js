import React from "react";

export default ({ items = [], children, render = null }) =>
  items.map(d => (!render ? children(d) : render(d)));
