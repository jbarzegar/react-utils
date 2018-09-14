import React from "react";

/* Conditional Rendering */
export default ({ cond, Then, Else, ...props }) =>
  cond ? <Then {...props} /> : <Else {...props} />;
