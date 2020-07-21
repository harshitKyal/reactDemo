import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Register/>
      </Route>
      <Route path="/login" exact>
        <Login/>
      </Route>
      <Route path="/dashboard">
        <Dashboard/>
      </Route>
    </Router>
  );
}

export default App;
