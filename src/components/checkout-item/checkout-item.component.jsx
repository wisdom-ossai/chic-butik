import React from 'react';
import { connect } from 'react-redux';
import { RemoveItemFromCart, DecreaseCartItemQuantity, AddItem } from '../../store/cart/cart.actions';
import { ItemContainer, ImageColumn, NameColumn, QuantityColumn, PriceColumn, RemoveButton, ChangeQuantity } from './checkout-item.styled';

const CheckoutItemComponent = ({item, removeItem, decrement, addItem}) => {
    const { id, imageUrl, name, quantity, price } = item;
    return (
    <ItemContainer>
        <ImageColumn>
            <img src={imageUrl} alt={`${name} to pay for`} />
        </ImageColumn>
        <NameColumn>{name}</NameColumn>
        <QuantityColumn>
            <ChangeQuantity onClick={() => decrement(item)}>-</ChangeQuantity>
            <span>{quantity}</span>
            <ChangeQuantity onClick={() => addItem(item)}>+</ChangeQuantity>
        </QuantityColumn>
        <PriceColumn>{price}</PriceColumn>
        <RemoveButton onClick={() => removeItem(id)}>&#10005;</RemoveButton>
    </ItemContainer>
)};

const mapDispatchToProps = dispatch => ({
    removeItem: id => dispatch(RemoveItemFromCart(id)),
    decrement: item => dispatch(DecreaseCartItemQuantity(item)),
    addItem: item => dispatch(AddItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItemComponent);