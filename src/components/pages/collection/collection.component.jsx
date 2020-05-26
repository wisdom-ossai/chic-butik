import React from 'react';
import { connect } from 'react-redux';
import './collection.component.scss';
import { getCollection } from '../../../store/shop/shop.selectors';
import CollectionItemComponent from '../../collection-item/collection-item.component'


const CollectionComponent = ({ collection }) => {
    const { title, items } = collection;
    return(
        <div className="collectionPage">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => (
                        <CollectionItemComponent key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
   collection: getCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionComponent);