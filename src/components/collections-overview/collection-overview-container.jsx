import { createStructuredSelector } from 'reselect';
import { isDataLoading } from '../../store/shop/shop.selectors';
import { compose } from 'redux';
import { connect } from 'react-redux';
import WithLoaderHOC from '../with-loader/with-loader.component';
import CollectionsOverviewComponent from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
    isLoading: isDataLoading
})
const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithLoaderHOC
)(CollectionsOverviewComponent);

export default CollectionsOverviewContainer;