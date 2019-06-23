import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { Search, Organization, User } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/organisation/:name" component={Organization} />
        <Route exact path="/profile/:name" component={User} />
        <Route component={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
