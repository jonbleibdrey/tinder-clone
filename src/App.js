import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        <Router>
            <Switch>
              <Route exact path="/chat">
              <Header backButton="/" />
                <h1>I am the Chat page</h1>
              </Route>
              <Route exact path="/">
              <Header />
               <TinderCards />
               <SwipeButtons/>
              </Route>
            </Switch>
        </Router>
      </h1>
    </div>
  );
}

export default App;

