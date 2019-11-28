import React, { Component, Fragment } from 'react';
import * as yup from 'yup';
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';

import {
    createProduct,
    getAllCategories,
    getAllBrands
} from '../../../../api';
import Error from '../../../propmts/error/error';
import { getDataFromForm } from '../../../../globalFunctions/formsHanler'

import './create.css';

class CreateProduct extends Component {
    state = {
        showError: false,
        gotError: true,
        message: '',
        brands: [],
        categories: []
    }

    product = {
        title: '',
        webId: '',
        price: '',
        imageUrl: '',
        availability: false,
        featuredItem: false,
        condition: '',
        category: '',
        brand: '',
    }

    componentDidMount() {
        getAllCategories().then(response => {
            this.setState({
                categories: response,
            })
        })
        getAllBrands().then(response => {
            this.setState({
                brands: response,
            })
        })
    }

    getRegisterData = (event) => getDataFromForm(event, this.product)

    sendProduct = () => {
        return createProduct(this.product)
            .then((res) => {
                res.ok ? this.resetForm() : this.serverErrorHandler(res.json());
                this.setState({
                    gotError: false,
                    showError: false,
                    message: 'No error to show!'
                });
            })

    }

    validateInput = () => {
        const productForm = yup.object({
            title: yup
                .string()
                .required('Please enter a title!'),
            webId: yup
                .string()
                .required('Please enter an ID!'),
            price: yup
                .string()
                .required('Please enter price!'),
            imageUrl: yup
                .string()
                .required('Please upload a picture!'),
            condition: yup
                .string()
                .required('Please enter a condition!'),
        });

        productForm.validate({
            title: this.product.title,
            webId: this.product.webId,
            price: this.product.price,
            imageUrl: this.product.imageUrl,
            condition: this.product.condition,
        }).then(isValid => this.sendProduct())
            .catch((err) => console.log(err))
    }

    serverErrorHandler = (err) => {
        err.then(err => {
            if (err.errmsg) {
                if (err.errmsg.includes('webId')) {
                    this.setState({
                        gotError: true,
                        showError: true,
                        message: 'The ID already exists!'
                    })
                }
            }
        })
    }

    resetForm = () => {
        document.getElementById('myform').reset();
        this.product = {
            title: '',
            webId: '',
            price: '',
            imageUrl: '',
            availability: false,
            featuredItem: false,
            condition: '',
        }
    }

    submit = (event) => {
        event.preventDefault();
        const btn = event.target;
        this.validateInput(btn);
    }

    // Cloudinary widget
    cloudinaryWidget = window.cloudinary.createUploadWidget({
        cloudName: 'dmogsuybw',
        uploadPreset: 'cgbbyz73'
    }, (error, result) => {
        if (!error && result && result.event === "success") {
            console.log('Done! Here is the image info: ', result.info);
            this.product.imageUrl = result.info.url;
        }
    })
    showClaudinaryWidget = () => {
        this.cloudinaryWidget.open()
    }

    render() {
        return <div className="col-sm-4">
            <div className="product-create-form">
                <form id="myform" onSubmit={this.submit}>
                    <Error showError={this.state.showError} message={this.state.message} title='Create new product:' />
                    <input type="text" onChange={this.getRegisterData} autoComplete="on" name="title" placeholder="Product title" />
                    <input type="number" min="0" onChange={this.getRegisterData} autoComplete="on" name="webId" placeholder="Product ID number" />
                    <input type="number" min="0" onChange={this.getRegisterData} autoComplete="on" name="price" placeholder="Product price $" />
                    <input type="text" onChange={this.getRegisterData} autoComplete="on" name="condition" placeholder="Product condition" />
                    {this.state.brands.length > 0 ?
                        <select defaultValue="defaut" name="brand" onChange={this.getRegisterData}>
                            <option value="defaut" disabled>
                                Please select a brand:
                            </option>
                            {this.state.brands.map(brand => {
                                return <option key={brand.name} value={brand._id}>
                                    {brand.name}
                                </option>
                            })}
                        </select>
                        :
                        <Fragment>
                            <br />
                            <span>No brands available! Please create a brand!</span>
                        </Fragment>
                    }
                    {this.state.categories.length > 0 ?
                        <select defaultValue="defaut" name="category" onChange={this.getRegisterData}>
                            <option value="defaut" disabled>
                                Please select a category:
                            </option>
                            {this.state.categories.map(category => {
                                return <option key={category.name} value={category._id}>
                                    {category.name}
                                </option>
                            })}
                        </select>
                        :
                        <Fragment>
                            <br />
                            <span>No categories available! Please create a category!</span>
                        </Fragment>
                    }
                    <span className="checkboxConteiner">
                        <input type="checkbox" onChange={this.getRegisterData} autoComplete="off" className="checkbox" name="availability" />
                        Product is available
                    </span>
                    <span className="checkboxConteiner">
                        <input type="checkbox" onChange={this.getRegisterData} autoComplete="off" className="checkbox" name="featuredItem" />
                        Product is featured
                    </span>
                    <button type="button" id="upload_widget" onClick={this.showClaudinaryWidget} className="cloudinary-button">Upload files</button>
                    <button type="submit" className="btn btn-default">Create</button>
                </form>
            </div>
        </div>
    }
}

export default CreateProduct;