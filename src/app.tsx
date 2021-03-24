import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/">main page</Route>
      <Route path="/vote">vote page</Route>
    </Switch>
  </Router>
);

export default App;
