import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import './checkout.component.scss';
import { getCartItems, getItemsTotalPrice } from '../../../store/cart/cart.selectors';
import CheckoutItemComponent from '../../checkout-item/checkout-item.component';


const CheckoutComponent = ({cartItems, totalPrice}) => (
    <div className="checkoutPage">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
             </div>
            <div className="header-block">
                <span>Description</span>
             </div>
            <div className="header-block">
                <span>Quantity</span>
             </div>
            <div className="header-block">
                <span>Price</span>
             </div>
            <div className="header-block">
                <span>Remove</span>
             </div>
        </div>
        {
           cartItems.length ? (cartItems.map(item => <CheckoutItemComponent key={item.id} item={item} />)) : (<h4>No item to purchase!</h4>)
        }
        <div className="total">${totalPrice}</div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: getCartItems,
    totalPrice: getItemsTotalPrice
})

export default connect(mapStateToProps)(CheckoutComponent);