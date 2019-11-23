import React from 'react';
import { createProduct } from '../../../../api';
import Error from '../../../propmts/error/error';
import './create.css';
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';
const { Component } = React;

class CreateProduct extends Component {
    state = {
        showError: false,
        gotError: true,
        message: '',
    }

    product = {
        title: '',
        webId: '',
        price: '',
        imageUrl: '',
        availability: false,
        featuredItem: false,
        condition: '',
    }

    getRegisterData = (event) => {
        const { name, value, type, checked } = event.target;
        type === 'checkbox' ? this.product[name] = checked : this.product[name] = value
    }

    validateInput = (btn) => {

        if (!this.product.title) {
            this.setState({
                gotError: true,
                showError: true,
                message: 'Please enter a title!'
            });
            return;
        }
        if (!this.product.webId) {
            this.setState({
                gotError: true,
                showError: true,
                message: 'Please enter an ID!'
            });
            return;
        }
        if (!this.product.price) {
            this.setState({
                gotError: true,
                showError: true,
                message: 'Please enter price!'
            });
            return;
        }
        if (!this.product.condition) {
            this.setState({
                gotError: true,
                showError: true,
                message: 'Please enter a condition!'
            });
            return;
        }
        if (!this.product.imageUrl) {
            this.setState({
                gotError: true,
                showError: true,
                message: 'Please upload a picture!'
            });
            return;
        }
        this.setState({
            gotError: false,
            showError: false,
            message: 'No error to show!'
        });

        this.sendProduct(btn);
    }

    serverErrorHandler = (err) => {
        err.then(err => {
            if (err.errmsg) {
                console.log(err)
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

    sendProduct = (btn) => {
        createProduct(this.product)
            .then((res) => {
                res.ok ? this.resetForm(btn) : this.serverErrorHandler(res.json());
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

    cloudinaryWidget = window.cloudinary.createUploadWidget({
        cloudName: 'dmogsuybw',
        uploadPreset: 'cgbbyz73'
    }, (error, result) => {
        if (!error && result && result.event === "success") {
            console.log('Done! Here is the image info: ', result.info);
            this.product.imageUrl = result.info.url;
        }
    }
    )
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