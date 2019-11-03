import React from 'react';
import './App.css';
import Header from './components/header/header';
import Slider from './components/slider/slider';
import SidebarLeft from './components/sidebar-left/sidebar-left';
import Items from './components/items/items';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <section>
        <div className="container">
          <div className="row">
            <SidebarLeft />
            <Items />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;