import React from 'react';
import './cart-item.component.scss';

const CartItemComponent = ({ item: { imageUrl, price, name, quantity } }) => (
    <div className='cartItem'>
        <img src={imageUrl} alt={`${name} in cart`} />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x ${price}</span>
        </div>
    </div>
);

export default CartItemComponent;