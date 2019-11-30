import React, { Fragment, Component } from 'react';
import { Route } from "react-router-dom";

import SidebarLeft from '../../sidebar-left/sidebar-left';
import Loader from '../../propmts/loader/loader';
import Product from '../../../components/product/product';
import { getAllProducts } from '../../../api';

class Shop extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        isLoading: true,
        products: [],
    }

    componentDidMount() {
        getAllProducts()
            .then(response => {
                this.setState({
                    isLoading: false,
                    products: response
                })
            })

    }

    split = (arey) => {
        const elements = arey;
        const pages = [];
        let chunk = [];
        while (elements.length !== 0) {
            for (let i = 0; i < 1; i++) {
                const elemet = elements.shift();
                if (elemet) {
                    chunk.push(elemet);
                }
            }
            pages.push(chunk);
            chunk = [];
        }
        return pages;
    }


    render() {
        const products = this.state.products;
        const pages = this.split(products);
        const currentPage = this.props.match.params.page;
        console.log(pages[currentPage]);
        console.log(currentPage);

        return <Fragment>
            <SidebarLeft />
            {this.state.isLoading ?
                <Loader /> :

                <div className="col-sm-9 padding-right">
                    <div className="features_items">
                        <h2 className="title text-center">Features Items</h2>
                        {pages[currentPage].map(product => <Product key={product.webId} product={product} />)}
                        <ul className="pagination">
                            {pages.map((page, index) => <li key={index} ><a href={`/shop/${index}`}>{index + 1}</a></li>)}
                        </ul>
                    </div>
                </div>
            }
        </Fragment >
    }
}
export default Shop;