import React from 'react';
import { connect } from 'react-redux';
import './shop.component.scss';
import CollectionsOverviewComponent from '../../collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import CollectionComponent from '../collection/collection.component';
import { createStructuredSelector } from 'reselect';
import { isDataLoading } from '../../../store/shop/shop.selectors';
import WithLoaderHOC from '../../with-loader/with-loader.component';



const CollectionComponentWithLoader = WithLoaderHOC(CollectionComponent);
const CollectionsOverviewComponentWithLoader = WithLoaderHOC(CollectionsOverviewComponent);

const ShopComponent = ({match, dataLoading}) => {
    return (
        <div className="Shop">
            <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewComponentWithLoader isLoading={dataLoading} {...props} />} />
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionComponentWithLoader isLoading={dataLoading} {...props}/>} />
        </div>
    )
};


const mapStateToProps = createStructuredSelector({
    dataLoading: isDataLoading
})

export default connect(mapStateToProps)(ShopComponent);