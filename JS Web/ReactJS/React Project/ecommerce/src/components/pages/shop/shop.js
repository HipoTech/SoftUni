import React, { Fragment, Component } from 'react';
import { Route, Link } from "react-router-dom";

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
        pages: [],
        page: 1,
    }

    componentDidMount() {
        const currentPage = this.props.match.params.page;
        getAllProducts()
            .then(response => {
                this.setState({
                    isLoading: false,
                    products: response
                })
            }).then(() => {
                const allPages = this.split(this.state.products);
                this.setState({
                    pages: allPages
                })
            })
    }

    split = (arey) => {
        const elements = arey.map(e => e);
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

    changePage = () => {
        this.setState({
            page: this.props.match.params.page,
        })
    }

    render() {
        const currentPage = this.props.match.params.page;

        return <Fragment>
            <SidebarLeft />
            {this.state.isLoading ?
                <Loader /> :
                <div className="col-sm-9 padding-right">
                    <div className="features_items">
                        <h2 className="title text-center">Features Items</h2>
                        {this.state.pages.length !== 0 && this.state.pages[currentPage].map(product => <Product key={product.webId} product={product} />)}
                        <ul className="pagination">
                            {this.state.pages.length !== 0 ? this.state.pages.map((page, index) => {
                                return <li key={index} className={+currentPage === index ? 'active' : null} >
                                    <Link to={`/shop/${index}`}>{index + 1}</Link>
                                </li>
                            }) :
                                <li className='active'>
                                    <Link to={`/shop/0`}>1</Link>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            }
        </Fragment >
    }
}
export default Shop;