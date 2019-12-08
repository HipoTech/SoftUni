import React, { useEffect, useState } from 'react';
import { getAllBrands } from '../../../api';
import Loader from '../../../components/propmts/loader/loader';

const Brands = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        getAllBrands()
            .then(res => setBrands(res))
            .catch(err => console.log(err))
    }, [])


    return <div className="brands_products">
        <h2>Brands</h2>
        <div className="brands-name">
            <ul className="nav nav-pills nav-stacked">
                {!!brands.length
                    ? brands.map(brand => <li key={brand.name}><a href="/"> <span className="pull-right"></span>{brand.name}</a></li>)
                    : <Loader />
                }
            </ul>
        </div>
    </div>
};

export default Brands;