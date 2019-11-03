import React from 'react';
import './price-range.css';


const PriceRange = () => (
    <div className="price-range">
        <h2>Price Range</h2>
        <div className="well text-center">
            <input type="text" className="span2" data-slider-min="0" data-slider-max="1000" data-slider-step="5" data-slider-value="[250,450]" id="sl2" />
            <br />
            <b className="pull-left">$ 0</b> <b className="pull-right">$ 1000</b>
        </div>
    </div>
);

export default PriceRange;