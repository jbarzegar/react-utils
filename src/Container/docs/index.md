# Container

`Container` is a headless component that allows separation of business and view logic by writing all your component methods/lifecycle in a class, and your view in a stateless react component.

The container component will render the component you provide it, passing the components instance of `this` down as props

## Props

| name       | type              | description                                                           |
| ---------- | ----------------- | --------------------------------------------------------------------- |
| `render`   | `React Component` | (optional) Renders a react component using containers `this` as props |
| `children` | `Function`        | used if render is not declared. Same behavior as `render`             |

## Usage

```javascript
import React from "react";
import { Container } from "@jamescodes/react-utils";

class Controller extends Container {
  /* All your biz logic No render needed */
}

// Using with react children
export default <Controller>
  {(controllerInstanceOfThis) => /* Your view */}
</Controller>;
```

### If you don't want to write your view directly in children you can use the render prop

```jsx
// ...
let View = props => <h1>My view</h1>;

export default <Controller render={View} />;
```
