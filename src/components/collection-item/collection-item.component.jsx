import React from 'react';
import './collection-item.component.scss';
import CustomButtonComponent from '../custom-button/custom-button.component';
import { AddItem } from '../../store/cart/cart.actions';
import { connect } from 'react-redux';

const CollectionItemComponent = ({ item, addItem }) => {
    const { name, imageUrl, price } = item
    return (
        <div className="CollectionItem">
            <div className="item-image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="item-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButtonComponent onClick={() => addItem(item)} invert={true}>Add to cart</CustomButtonComponent>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(AddItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItemComponent);