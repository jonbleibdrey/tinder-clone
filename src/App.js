import React from 'react';
import Header from './Header';
import Chats from './Chats';
import ChatScreen from './ChatScreen';
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
            <Route exact path="/chat/:person">
              <Header backButton="/chat" />
                <ChatScreen/>
              </Route>
              <Route exact path="/chat">
              <Header backButton="/" />
                <Chats/>
              </Route>
              <Route exact path="/">
              <Header />
               <TinderCards />
               <SwipeButtons/>
              </Route>
              <Route exact path="/profile">
              <Header />
              </Route>
            </Switch>
        </Router>
      </h1>
    </div>
  );
}

export default App;

