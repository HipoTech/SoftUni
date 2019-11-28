import React from 'react';
import './navigationMenu.css';
import { Link } from 'react-router-dom';

const NavigationMenu = () => (
    <div className="header-bottom">
        <div className="container">
            <div className="row">
                <div className="col-sm-9">
                    <div className="mainmenu pull-left">
                        <ul className="nav navbar-nav collapse navbar-collapse">
                            <li><Link to="/" >Home</Link></li>
                            <li className="dropdown"><Link to="/">Shop<i className="fa fa-angle-down"></i></Link>
                                <ul role="menu" className="sub-menu">
                                    <li><Link to="/">Products</Link></li>
                                    <li><Link to="/">Product Details</Link></li>
                                    <li><Link to="/">Checkout</Link></li>
                                    <li><Link to="/">Cart</Link></li>
                                    <li><Link to="/">Login</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown"><Link to="/">Blog<i className="fa fa-angle-down"></i></Link>
                                <ul role="menu" className="sub-menu">
                                    <li><Link to="/">Blog List</Link></li>
                                    <li><Link to="/">Blog Single</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/">404</Link></li>
                            <li><Link to="/">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="search_box pull-right">
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-9">
                    <div className="mainmenu pull-left">
                        <ul className="nav navbar-nav collapse navbar-collapse">
                            <li><Link to="/product-create" >Create product</Link></li>
                            <li><Link to="/category-create" >Create category</Link></li>
                            <li><Link to="/brand-create" >Create brand</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default NavigationMenu;