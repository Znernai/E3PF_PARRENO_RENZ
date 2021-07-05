import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import axios from 'axios';

import LOA from './Image/LOA.png'
import Login from './Login';
import Dashboard from './Dashboard';
import Home from './Home';

import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from './Utils/Common';

// The stracture of fullpage for Home.js

function App() {
  const [authLoading, setAuthLoading] = useState(true);

  // the connection in order to connect the sever and my website

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }

// this is the output that can see if you start the website
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <h1>ELECTIVE 3</h1>
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/dashboard">Name List</NavLink>
            <NavLink activeClassName="active" to="/login">Sign In</NavLink>
            </div>
            <div className="logo">
              <center><h1>Brand X</h1></center>
              <center><img src={LOA} alt="LOA" className="LOALOGO"/> </center>
              
             </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <PublicRoute path="/login" component={Login} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
        
    </div>
  );
}

export default App;