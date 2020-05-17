import React from 'react';
import CollectionItemComponent from '../collection-item/collection-item.component';
import './collections-preview.component.scss';


export const CollectionsPreviewComponent = ({items, title}) => (
    <div className="CollectionPreview">
        <h2 className="title">{title}</h2>
        <div className="collections">
            {
                items
                    .filter((items, index) => index < 4)
                    .map((item) => <CollectionItemComponent key={item.id} item={item} />)
            }
        </div>
    </div>
)