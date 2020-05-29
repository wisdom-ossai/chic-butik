import React from 'react';
import { connect } from 'react-redux';
import './shop.component.scss';
import CollectionsOverviewComponent from '../../collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import CollectionComponent from '../collection/collection.component';
import { createStructuredSelector } from 'reselect';
import { isDataLoading, isShopDataLoaded } from '../../../store/shop/shop.selectors';
import WithLoaderHOC from '../../with-loader/with-loader.component';
import { StartFetchShopData } from '../../../store/shop/shop.actions';



const CollectionComponentWithLoader = WithLoaderHOC(CollectionComponent);
const CollectionsOverviewComponentWithLoader = WithLoaderHOC(CollectionsOverviewComponent);

class ShopComponent extends React.Component {

    componentDidMount() {
        this.props.dispatch(StartFetchShopData());
    }

    render() {
        const { match, dataLoading, dataLoaded } = this.props
        return (
            <div className="Shop">
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewComponentWithLoader isLoading={!dataLoading} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionComponentWithLoader isLoading={!dataLoaded} {...props} />} />
            </div>
        )
    }
};


const mapStateToProps = createStructuredSelector({
    dataLoaded: isShopDataLoaded,
    dataLoading: isDataLoading
})

export default connect(mapStateToProps)(ShopComponent);