import React from 'react';
import './details.css';
import Product from './product/product';
import SidebarLeft from '../../../sidebar-left/sidebar-left';
import { getOneProduct } from '../../../../api';
const { Component } = React;

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
                    product: response[0]
                })
            })
    }

    render() {
        return (
            <Fragment>
                <SidebarLeft />
                <Product product={this.state.product} />
            </Fragment >
        )
    }
};

export default ProductDetails;