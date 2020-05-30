import React from 'react';
import './shop.component.scss';
import { Route } from 'react-router-dom';
import { LoadShopData } from '../../../store/shop/shop.actions';
import CollectionsOverviewContainer from '../../collections-overview/collection-overview-container';
import CollectionContainer from '../collection/collection-container';
import { connect } from 'react-redux';

class ShopComponent extends React.Component {

    componentDidMount() {
        this.props.startFetchShopData();
    }

    render() {
        const { match } = this.props
        return (
            <div className="Shop">
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionContainer} />
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    startFetchShopData: () => dispatch(LoadShopData())
})

export default connect(null, mapDispatchToProps)(ShopComponent);