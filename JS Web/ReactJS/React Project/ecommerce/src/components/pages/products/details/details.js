import React, { Component } from 'react';
import './details.css';
import Product from './product/product';
import Loader from '../../../propmts/loader/loader';
import SidebarLeft from '../../../sidebar-left/sidebar-left';
import { getOneProduct } from '../../../../api';

const { Fragment } = React;

class ProductDetails extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        isLoading: true,
        product: {},
    }

    componentDidMount(event) {
        const product = { id: this.props.match.params.id };
        getOneProduct(product)
            .then(response => {
                this.setState({
                    isLoading: false,
                    product: response
                })
            })
    }

    render() {
        console.log(this.state.product);
        return (
            <Fragment>
                <SidebarLeft />
                {this.state.isLoading ? <Loader /> : <Product product={this.state.product} />}
            </Fragment >
        )
    }
};

export default ProductDetails;