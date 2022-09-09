import React from "react";
import ReactDOM from "react-dom/client";
import { Saludo, Usuario } from "./Saludo";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Producto } from "./Producto";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Home Page</h1>
    <Button text="Click me " />
    <Button text="Pay" />
    <Button text="" name="Leito" />
    <hr />

    <Saludo title="1" name="Leonardo" />
    <Saludo title="2" name="Julian3" />
    <Saludo title="3" />
    <Usuario
      name="Leilo"
      amount={2000000}
      married={true}
      points={[12, 33.2, 123]}
      address={{
        street: "123 Townsend St",
        city: "New York",
      }}
      greet={function() {
        alert("Holi");
      }}
    />
    <Usuario
      name="Julian"
      amount={4500000}
      married={false}
      points={[1222.2, 333.2]}
      address={{
        street: "Avenue 5 st.",
        city: "San Francisco",
      }}
    />
    <TaskCard ready={false} />
    {/* <Producto /> */}
  </div>
);
