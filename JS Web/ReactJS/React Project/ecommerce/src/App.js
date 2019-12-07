import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import Cookies from 'js-cookie';
import Store, { StoreContext } from "./globalFunctions/Store/Store";
import Auth from "./globalFunctions/Authenticator";

// Components
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Slider from './components/slider/slider';
import Loader from './components/propmts/loader/loader';
// Pages
import Home from './components/pages/home/home';
import Shop from './components/pages/shop/shop';
import UserControl from './components/user/loginOrRegister/UserControl';
import LogOut from './components/user/loginOrRegister/logOut/logOut';
import notFound from './components/pages/notFound/notFound';
// Product
import ProductDetails from './components/pages/products/details/details';
import ProductCreate from './components/pages/products/create/create';
import ProductEdit from './components/pages/products/edit/edit';
import ProductDelete from './components/pages/products/delete/delete';
// Brand
import BrandPage from './components/pages/brands/brandPage/brandPage';
import BrandCreate from './components/pages/brands/create/create';
// import BrandEdit from './components/pages/brands/edit/edit';
// import BrandDelete from './components/pages/brands/delete/delete';
// Category
import CategoryPage from './components/pages/categories/categoryPage/categoryPage';
import CategoryCreate from './components/pages/categories/create/create';
// import CategoryEdit from './components/pages/categories/edit/edit';
// import CategoryDelete from './components/pages/categories/delete/delete';

function App() {
  const cookie = Cookies.get('ecom-user-info');
  let userData = false;
  if (cookie) {
    userData = JSON.parse(cookie).user
  }

  return (
    < Store >
      <Auth>
        <StoreContext.Consumer>
          {({ state }) => {
            const user = state.user;
            console.log('here');
            console.log(state);

            const isLogged = !!state.user;
            return user === undefined
              ? <Loader />
              : <div className="App">
                <Header user={user} isLogged={isLogged} />
                <Route path='/' exact component={Slider} />
                <Route path='/home' exact component={Slider} />
                <section>
                  <div className="container">
                    <div className="row">
                      <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/home' exact component={Home} />
                        <Route path='/shop/:page' exact component={Shop} />
                        <Route path='/loginOrRegister' exact component={!isLogged ? UserControl : () => <Redirect to='/' />} />
                        <Route path='/logOut' exact component={isLogged ? LogOut : () => <Redirect to='/' />} />
                        {/* Product */}
                        <Route path='/product-create' exact component={ProductCreate} />
                        <Route path='/product-details/:id' exact component={ProductDetails} />
                        <Route path='/product-edit/:id' exact component={ProductEdit} />
                        <Route path='/product-delete/:id' exact component={ProductDelete} />
                        {/* Brand */}
                        <Route path='/brand-create' exact component={BrandCreate} />
                        <Route path='/brands' exact component={BrandPage} />
                        {/* <Route path='/product-edit/:id' exact component={BrandEdit} />
              <Route path='/product-delete/:id' exact component={BrandDelete} /> */}
                        {/* Category */}
                        <Route path='/category-create' exact component={CategoryCreate} />
                        <Route path='/categories' exact component={CategoryPage} />
                        {/* <Route path='/product-edit/:id' exact component={CategoryEdit} />
              <Route path='/product-delete/:id' exact component={CategoryDelete} /> */}

                        <Route component={notFound} />
                      </Switch>
                    </div>
                  </div>
                </section>
                <Footer />
              </div>
          }}
        </StoreContext.Consumer>
      </Auth>
    </Store >
  );
}

export default App;