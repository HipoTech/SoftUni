import React from 'react';
import { Link } from 'react-router-dom';

const Brand = (props) => {
    const brand = props.brand;
    return <div key={brand.webId} className="col-sm-4">
        <div className="product-image-wrapper">
            <div className="single-products">
                <div className="productinfo text-center">
                    <img src={brand.imageUrl} alt={brand.name} />
                    <p>{brand.name}</p>
                </div>
                <div className="product-overlay">
                    <div className="overlay-content">
                        <h2>${brand.price}</h2>
                        <p>{brand.title}</p>
                        <h2>
                            <Link to={`/brand-edit/${brand._id}`} className="btn btn-default add-to-cart">
                                <i className="fa fa-edit"></i>Brand edit</Link>
                        </h2>
                        <h2>
                            <Link className='deleteBtn' to={`/brand-delete/${brand._id}`} className="btn btn-default add-to-cart">
                                <i className="fa fa-trash"></i>Brand delete</Link>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Brand;