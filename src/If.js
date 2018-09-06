import React from "react";

type Props = {
  cond: Boolean,
  Then: React.ComponentType,
  Else: React.ComponentType
};
/* Conditional Rendering */
export default ({ cond, Then, Else, ...props }) =>
  cond ? <Then {...props} /> : <Else {...props} />;
