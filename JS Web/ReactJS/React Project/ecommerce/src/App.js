import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Cookies from 'js-cookie';
// Components
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Slider from './components/slider/slider';
// Pages
import Home from './components/pages/home/home';
import Shop from './components/pages/shop/shop';
import UserControl from './components/user/loginOrRegister/UserControl';
import notFound from './components/pages/notFound/notFound';
// Pages Elements
import ProductDetails from './components/pages/products/details/details';
import ProductCreate from './components/pages/products/create/create';
import ProductEdit from './components/pages/products/edit/edit';
import BrandPage from './components/pages/brands/brandPage/brandPage';
import BrandCreate from './components/pages/brands/create/create';
import CategoryPage from './components/pages/categories/categoryPage/categoryPage';
import CategoryCreate from './components/pages/categories/create/create';

function App() {
  const cookie = Cookies.get('ecom-user-info');
  let userData = {}
  if (cookie) {
    userData = JSON.parse(cookie).user
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
              <Route path='/categories' exact component={CategoryPage} />
              <Route path='/brands' exact component={BrandPage} />
              <Route path='/product-details/:id' exact component={ProductDetails} />
              <Route path='/product-edit/:id' exact component={ProductEdit} />
              <Route path='/product-create' exact component={ProductCreate} />
              <Route path='/brand-create' exact component={BrandCreate} />
              <Route path='/category-create' exact component={CategoryCreate} />
              <Route path='/loginOrRegister' exact component={UserControl} />
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