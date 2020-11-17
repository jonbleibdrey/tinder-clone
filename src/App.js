import React from 'react'
import Header from './Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        <Router>
        <Header />
        <Switch>
          <Route>
            
          </Route>
        </Switch>
        </Router>

      </h1>
    </div>
  );
}

export default App;

