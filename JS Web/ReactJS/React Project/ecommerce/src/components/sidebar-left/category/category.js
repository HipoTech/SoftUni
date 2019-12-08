import React, { Fragment, useEffect, useState } from 'react';
import { getAllCategories } from '../../../api';
import Loader from '../../../components/propmts/loader/loader';


const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategories()
            .then(res => setCategories(res))
            .catch(err => console.log(err))
    }, [])

    return <Fragment>
        <h2>Category</h2>
        <div className="panel-group category-products" id="accordian">
            {!!categories.length
                ? categories.map(category => <div key={category.name} className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title"><a href="/">{category.name}</a></h4>
                    </div>
                </div>
                )
                : <Loader />
            }
        </div>
    </Fragment >
};

export default Category;