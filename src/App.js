import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Nav from "./components/Nav";
import { Home } from "./scenes/Home";
import { About } from "./scenes/About";
import Shop from "./scenes/Shop";
import { Item } from "./scenes/Item";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={Item} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export { App };
