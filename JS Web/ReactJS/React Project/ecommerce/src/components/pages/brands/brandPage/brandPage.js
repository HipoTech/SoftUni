import React, { Fragment, Component } from 'react';

import SidebarLeft from '../../../sidebar-left/sidebar-left';
import Loader from '../../../propmts/loader/loader';
import Brand from '../../../brand/brand';
import { getAllBrands } from '../../../../api';

class BrandPage extends Component {
    state = {
        isLoading: true,
        brands: [],
    }

    componentDidMount() {
        getAllBrands()
            .then(response => {
                this.setState({
                    isLoading: false,
                    brands: response
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
                        <h2 className="title text-center">Brands:</h2>
                        {this.state.brands.length !== 0 && this.state.brands.map(brand => <Brand key={brand.name} brand={brand} />)}
                    </div>
                </div>
            }
        </Fragment >
    }
}
export default BrandPage;