import React, { Fragment, Component } from 'react';
import { Route, Link } from "react-router-dom";

import SidebarLeft from '../../../sidebar-left/sidebar-left';
import Loader from '../../../propmts/loader/loader';
import Category from '../../../category/category';
import { getAllCategories } from '../../../../api';

class CategoryPage extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        isLoading: true,
        categories: [],
    }

    componentDidMount() {
        getAllCategories()
            .then(response => {
                this.setState({
                    isLoading: false,
                    categories: response
                })
            })
    }

    render() {
        return <Fragment>
            <SidebarLeft />
            {this.state.isLoading ?
                <Loader /> :
                <div className="col-sm-9 padding-right">
                    <div className="features_items">
                        <h2 className="title text-center">Categories:</h2>
                        {this.state.categories.length !== 0 && this.state.categories.map(category => <Category key={category.name} category={category} />)}
                    </div>
                </div>
            }
        </Fragment >
    }
}
export default CategoryPage;