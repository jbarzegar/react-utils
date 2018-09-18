## Source

```jsx
class Controller extends Container {
  state = {
    count: 0
  };

  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });
}

let View = ({ state, increment, decrement }) => (
  <Fragment>
    <h1>{state.count}</h1>

    <button onClick={decrement}>-</button>
  </Fragment>
);

export default () => <Controller render={View} />;
```
