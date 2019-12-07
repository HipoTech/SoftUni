import React from 'react';
import { Link } from 'react-router-dom';

const Category = (props) => {
    const category = props.category;
    return <div key={category.webId} className="col-sm-4">
        <div className="product-image-wrapper">
            <div className="single-products">
                <div className="productinfo text-center">
                    <img src={category.imageUrl} alt={category.name} />
                    <p>{category.name}</p>
                </div>
                <div className="product-overlay">
                    <div className="overlay-content">
                        <h2>${category.price}</h2>
                        <p>{category.title}</p>
                        <h2>
                            <Link to={`/category-edit/${category._id}`} className="btn btn-default add-to-cart">
                                <i className="fa fa-edit"></i>Category edit</Link>
                        </h2>
                        <h2>
                            <Link className='deleteBtn' to={`/category-delete/${category._id}`} className="btn btn-default add-to-cart">
                                <i className="fa fa-trash"></i>Category delete</Link>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Category;