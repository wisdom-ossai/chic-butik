import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CollectionsPreviewComponent } from '../collection-preview/collections-preview.component';
import './collections-overview.component.scss';
import { getCollectionsForPreview } from '../../store/shop/shop.selectors';

const CollectionsOverviewComponent = ({ collections }) => (
    <div className="CollectionComponent">
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionsPreviewComponent key={id} {...otherCollectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: getCollectionsForPreview
});

export default connect (mapStateToProps)(CollectionsOverviewComponent);