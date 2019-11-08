import React from 'react';
import './App.css';
import {
  BrowserRouter as
    Router,
  // Switch,
  Route,
  // Link
} from "react-router-dom";

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/pages/home/home';
import Login from './components/user/login/login';
import Slider from './components/slider/slider';
import requester from './api/requester';
import submitter from './api/submitter';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path='/' exact component={Slider} />
      <Route path='/Home' exact component={Slider} />
      <section>
        <div className="container">
          <div className="row">
            <Route path='/' exact component={Home} />
            <Route path='/home' exact component={Home} />
            <Route path='/login' component={Login} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;