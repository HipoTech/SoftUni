import React from 'react';
import './sidebar-left.css';

import Category from './category/category';
import Brands from './brands/brands';
import PriceRange from './price-range/price-range';
import Shiping from './shiping/shiping';

const SidebarLeft = () => (
    <div className="col-sm-3">
        <div className="left-sidebar">
            <Category />
            <Brands />
            <PriceRange />
            <Shiping />
        </div>
    </div>
);

export default SidebarLeft;