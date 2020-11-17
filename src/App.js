import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
       <Header />
        <Router>
            <Switch>
              <Route exact path="/chat">
                <h1>I am the Chat page</h1>
              </Route>
              <Route exact path="/">
               <TinderCards />
              </Route>
            </Switch>
        </Router>
      </h1>
    </div>
  );
}

export default App;

