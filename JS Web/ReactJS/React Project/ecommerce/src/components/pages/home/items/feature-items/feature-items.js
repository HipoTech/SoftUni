import React from 'react';
import { Link } from 'react-router-dom';
import './feature-items.css';
const { Component } = React;

const FeatureItems = (props) => {
    const featuredItemsOnly = props.products.filter(product => product.featuredItem === true);
    if (featuredItemsOnly.length !== 0) {
        return <div className="features_items">
            <h2 className="title text-center">Features Items</h2>
            {
                featuredItemsOnly
                    .map(product => {
                        return <div key={product.webId} className="col-sm-4">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src={product.imageUrl} alt="" />
                                        <h2>${product.price}</h2>
                                        <p>{product.title}</p>
                                        <Link to="/" className="btn btn-default add-to-cart"><i
                                            className="fa fa-shopping-cart"></i>Add to cart</Link>
                                    </div>
                                    <div className="product-overlay">
                                        <div className="overlay-content">
                                            <h2>${product.price}</h2>
                                            <p>{product.title}</p>
                                            <Link to="/" className="btn btn-default add-to-cart"><i
                                                className="fa fa-shopping-cart"></i>Add to cart</Link>
                                            <h2>
                                                <Link to={`/product-details/${product._id}`} className="btn btn-default add-to-cart">
                                                    <i className="fa fa-info-circle"></i>Product Info</Link>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="choose">
                                    <ul className="nav nav-pills nav-justified">
                                        <li><Link to="/"><i className="fa fa-plus-square"></i>Add to wishlist</Link></li>
                                        <li><Link to="/"><i className="fa fa-plus-square"></i>Add to compare</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    })}
        </div>
    } else {
        return <div className="features_items">
            <h2 className="title text-center">No products to show! Please create a product.</h2>
        </div>
    }
}

export default FeatureItems;