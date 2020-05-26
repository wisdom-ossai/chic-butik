import React from 'react';
import './shop.component.scss';
import CollectionsOverviewComponent from '../../collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import CollectionComponent from '../collection/collection.component';


const ShopComponent = ({match}) => {
    return (
        <div className="Shop">
            <Route exact path={`${match.path}`} component={CollectionsOverviewComponent} />
            <Route path={`${match.path}/:collectionId`} component={CollectionComponent} />
        </div>
    )
};




export default ShopComponent;