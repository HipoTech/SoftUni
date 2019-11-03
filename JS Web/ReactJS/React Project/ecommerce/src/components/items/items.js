import React from 'react';
import './items.css';
import FeatureItems from './feature-items/feature-items';
import CategoriMainSection from './category-main-section/categori-main-section';
import RecommendedItems from './recommended-items/recommended-items';

const Items = () => (
    <div className="col-sm-9 padding-right">
        <FeatureItems />
        <CategoriMainSection />
        <RecommendedItems />
    </div>
);

export default Items;