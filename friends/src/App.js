import React from 'react';
import Login from './components/Login';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute  from './components/PrivateRoute';
import './App.css';
import FriendsList from './components/FriendsList';
import Header from './components/Header';


function App() {
  return (
    <div className="">
      <Header />
      <Switch>
        <PrivateRoute exact path="/friends" component={FriendsList} />
        <Route path="/login" component={Login} />
        {/* <Route exact path='/edit/:id' component={EditFriend} /> */}
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
