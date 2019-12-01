import React, { Component } from 'react';
import './navigationMenu.css';
import { Link } from 'react-router-dom';

class NavigationMenu extends Component {
    constructor(props) {
        super(props)
    }
    activate = (e) => {
        e.target.className = "active"
        console.log(e.target);

    }


    render() {
        const currentPage = this.props;
        console.log(currentPage);

        return <div className="header-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-sm-9">
                        <div className="mainmenu pull-left">
                            <ul className="nav navbar-nav collapse navbar-collapse">
                                <li><Link className="navLink" to="/" >Home</Link></li>
                                <li>
                                    <Link className="navLink" to="/shop/0">Shop</Link>
                                </li>
                                <li>
                                    <Link className="navLink" to="/brands">Brands</Link>
                                </li>
                                <li>
                                    <Link className="navLink" to="/categories">Categories</Link>
                                </li>
                                <li className="dropdown"><Link className="navLink" to="/">Blog<i className="fa fa-angle-down"></i></Link>
                                    <ul role="menu" className="sub-menu">
                                        <li><Link className="navLink" to="/">Blog List</Link></li>
                                        <li><Link className="navLink" to="/">Blog Single</Link></li>
                                    </ul>
                                </li>
                                <li><Link className="navLink" to="/">404</Link></li>
                                <li><Link className="navLink" to="/">Contact</Link></li>
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
                                <li><Link className="navLink" to="/product-create" >Create product</Link></li>
                                <li><Link className="navLink" to="/category-create" >Create category</Link></li>
                                <li><Link className="navLink" to="/brand-create" >Create brand</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
};

export default NavigationMenu;