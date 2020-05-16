import React from 'react';
import SHOP_DATA from './shop.data';
import { CollectionsPreviewComponent } from '../../collection-preview/collections-preview.component';
import './shop.component.scss';

export class ShopComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: []
        }
    }

    componentDidMount() {
        this.setState(() => {
            return {
                collections: SHOP_DATA
            }
        })
    }

    render() {
        const { collections } = this.state;
        return (
            <div className="Shop">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionsPreviewComponent key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }

}