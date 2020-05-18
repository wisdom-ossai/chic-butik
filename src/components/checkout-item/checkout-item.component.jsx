import React from 'react';
import './checkout-item.component.scss';

const CheckoutItemComponent = ({item}) => {
    const { id, imageUrl, name, quantity, price } = item
    return (
    <div className="checkoutItem">
        <div className="img-container">
            <img src={imageUrl} alt={`${name} to pay for`} />
        </div>
        <div className="name">{name}</div>
        <div className="quantity">{quantity}</div>
        <div className="price">{price}</div>
        <div className="remove">&#10005;</div>
    </div>
)};

export default CheckoutItemComponent;