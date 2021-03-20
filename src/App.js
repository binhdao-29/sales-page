import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/home/Home';
import Product from './components/Product';
import SignUp from './components/login/SignUp';
import SignIn from './components/login/SignIn';
import { CartProvider } from './context/CartProvider';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/products/" exact component={Product} />
          <Route path="/login" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
