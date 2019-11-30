import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Cookies from 'js-cookie';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/pages/home/home';
import Shop from './components/pages/shop/shop';
import UserCotrol from './components/user/loginOrRegister/UserCotrol';
import Slider from './components/slider/slider';
import ProductDetails from './components/pages/products/details/details';
import CreateProduct from './components/pages/products/create/create';
import CreateCategory from './components/pages/categories/create/create';
import CreateBrand from './components/pages/brands/create/create';
import notFound from './components/pages/notFound/notFound';

function App() {
  const cookie = Cookies.get('ecom-user-info');
  const userData = {}
  if (cookie) {
    userData = JSON.parse()
    console.log(userData);
  }

  return (
    <div className="App">
      <Header userData={userData} />
      <Route path='/' exact component={Slider} />
      <Route path='/home' exact component={Slider} />
      <section>
        <div className="container">
          <div className="row">
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/home' exact component={Home} />
              <Route path='/shop/:page' exact component={Shop} />
              <Route path='/product-details/:id' exact component={ProductDetails} />
              <Route path='/product-create' exact component={CreateProduct} />
              <Route path='/brand-create' exact component={CreateBrand} />
              <Route path='/category-create' exact component={CreateCategory} />
              <Route path='/loginOrRegister' exact component={UserCotrol} />
              <Route component={notFound} />
            </Switch>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;