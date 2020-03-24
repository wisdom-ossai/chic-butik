import React from 'react';
import './collection-item.component.scss';

const CollectionItemComponent = ({ id, name, imageUrl, price }) => (
    <div className="CollectionItem">
        <div className="item-image" style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className="item-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
    </div>
)

export default CollectionItemComponent;