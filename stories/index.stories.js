import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";

import { Map } from "react-powerplug";

import If from "../src/If";
import Fetch from "../src/Fetch";
import ForEach from "../src/ForEach";

const Loading = () => <h1>Loading!!!!</h1>;

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("IF", module).add("Default", () => (
  <If
    cond={"james" === 20}
    Then={() => <h1>Condition Is true</h1>}
    Else={() => <h1>Condition is not true</h1>}
  />
));

storiesOf("Fetch", module).add("Default", () => (
  <Fetch
    url="https://jsonplaceholder.typicode.com/users"
    LoadingComponent={Loading}
  >
    {({ data }) => (
      <ForEach items={data}>
        {d => (
          <Fragment key={d.id}>
            <h1>{d.name}</h1>
            <h2>{d.email}</h2>
          </Fragment>
        )}
      </ForEach>
    )}
  </Fetch>
));

const dataSet = [
  { name: "James", age: 21 },
  { name: "Kacee", age: 25 },
  { name: "Gabriel", age: 21 },
  { name: "Tegan", age: 22 }
];
storiesOf("ForEach", module).add("Default", () => (
  <ForEach
    items={dataSet}
    render={({ name, age }) => (
      <Fragment key={name}>
        <h1>{name}</h1>
        <h2>{age}</h2>
      </Fragment>
    )}
  />
));
