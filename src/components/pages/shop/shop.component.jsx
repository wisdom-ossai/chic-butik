import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { CollectionsPreviewComponent } from '../../collection-preview/collections-preview.component';
import './shop.component.scss';
import { getShopData } from '../../../store/shop/shop.selectors';


const ShopComponent = ({collections}) => {
    return (
        <div className="Shop">
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionsPreviewComponent key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
};


const mapStateToProps = createStructuredSelector({
    collections: getShopData
})

export default connect(mapStateToProps)(ShopComponent);