import React from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from "../../globalFunctions/Store/Store";

const Brand = ({ brand }) => {
    const { state } = React.useContext(StoreContext);
    const isLoggedIn = !!state.user;

    return <div key={brand.webId} className="col-sm-4">
        <div className="product-image-wrapper">
            <div className="single-products">
                <div className="productinfo text-center">
                    <img src={brand.imageUrl} alt={brand.name} />
                    <p>{brand.name}</p>
                </div>
                {isLoggedIn
                    ? <div className="product-overlay">
                        <div className="overlay-content">
                            <h2>
                                <Link to={`/brand-edit/${brand._id}`} className="btn btn-default add-to-cart">
                                    <i className="fa fa-edit"></i>Edit {brand.name}</Link>
                            </h2>
                            <h2>
                                <Link to={`/brand-delete/${brand._id}`} className="btn btn-default add-to-cart deleteBtn">
                                    <i className="fa fa-trash"></i>Delete {brand.name}</Link>
                            </h2>
                        </div>
                    </div>
                    : null
                }
            </div>
        </div>
    </div>
}

export default Brand;