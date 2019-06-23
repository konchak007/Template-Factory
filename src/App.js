import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom'

import { Search } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Search} />
        <Route path="/organisation" component={() => <h1>asdasd</h1>} />
        <Route path="/profile" component={() => <h1>Mariyka</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
