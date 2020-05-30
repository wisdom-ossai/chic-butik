import { createStructuredSelector } from "reselect";
import { isShopDataLoaded } from "../../../store/shop/shop.selectors";
import { compose } from "redux";
import { connect } from "react-redux";
import WithLoaderHOC from "../../with-loader/with-loader.component";
import CollectionComponent from './collection.component';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !isShopDataLoaded(state)
});

const CollectionContainer = compose(
    connect(mapStateToProps),
    WithLoaderHOC
)(CollectionComponent);

export default CollectionContainer;