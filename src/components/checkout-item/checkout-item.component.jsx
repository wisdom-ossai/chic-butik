import React from 'react';
import { connect } from 'react-redux';
import './checkout-item.component.scss';
import { RemoveItemFromCart, DecreaseCartItemQuantity, AddItem } from '../../store/cart/cart.actions';

const CheckoutItemComponent = ({item, removeItem, decrement, addItem}) => {
    const { id, imageUrl, name, quantity, price } = item;
    return (
    <div className="checkoutItem">
        <div className="img-container">
            <img src={imageUrl} alt={`${name} to pay for`} />
        </div>
        <div className="name">{name}</div>
            <div className="quantity">
                <div className="minus" onClick={() => decrement(item)}>-</div>
                <span>{quantity}</span>
                <div className="plus" onClick={() => addItem(item)}>+</div>
            </div>
        <div className="price">{price}</div>
        <div className="remove" onClick={() => removeItem(id)}>&#10005;</div>
    </div>
)};

const mapDispatchToProps = dispatch => ({
    removeItem: id => dispatch(RemoveItemFromCart(id)),
    decrement: item => dispatch(DecreaseCartItemQuantity(item)),
    addItem: item => dispatch(AddItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItemComponent);