import React from 'react';
import Login from './components/Login';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute  from './components/PrivateRoute';
import './App.css';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <div className="App">
      Friends
      <Switch>
        <PrivateRoute exact path="/friends" component={FriendsList} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
