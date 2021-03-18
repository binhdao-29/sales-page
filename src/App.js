import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Advertisement from './components/home/Advertisement';
import Home from './components/Home';
import Product from './components/Product';
import SignUp from './components/login/SignUp';
import SignIn from './components/login/SignIn';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Advertisement} />
        <Route path="/products/" exact component={Product} />
        <Route path="/login" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
      </div>
    </Router> 
  );
}

export default App;
