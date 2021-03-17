import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import Product from './components/Product';
import SignIn from './login/SignIn';

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/sales-page');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/express-demo');

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/products/" exact component={Product} />
        <Route path="/login" exact component={SignIn} />
      </div>
    </Router> 
  );
}

export default App;
