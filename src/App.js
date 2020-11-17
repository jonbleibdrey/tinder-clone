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
       <Header />
        <Router>
            <Switch>
              <Route exact path="/">
                <h1>I am Home page</h1>
              </Route>
              <Route exact path="/chat">
                <h1>I am the Chat page</h1>
              </Route>
            </Switch>
        </Router>
      </h1>
    </div>
  );
}

export default App;

