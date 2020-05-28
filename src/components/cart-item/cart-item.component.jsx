import React from 'react';
import { ItemDetailsContainer, ItemContainer, ImageContainer } from './cart-item.styled';

const CartItemComponent = ({ item: { imageUrl, price, name, quantity } }) => (
    <ItemContainer>
        <ImageContainer src={imageUrl} alt={`${name} in cart`} />
        <ItemDetailsContainer>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x ${price}</span>
        </ItemDetailsContainer>
    </ItemContainer>
);

export default CartItemComponent;