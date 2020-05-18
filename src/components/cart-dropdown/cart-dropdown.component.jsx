import React from 'react';
import CustomButtonComponent from '../custom-button/custom-button.component'
import './cart-dropdown.component.scss';
import { connect } from 'react-redux';
import CartItemComponent from '../cart-item/cart-item.component';
import { getCartItems } from '../../store/cart/cart.selectors';


const CartDropdownComponent = ({cartItems}) => (
    <div className='cartDropdown'>
        <div className='cart-items'>
            {
              cartItems.length ? (cartItems.map(item => <CartItemComponent key={item.id} item={item} />)) : (<h6 className='no-item-text'>No item selected</h6>)
            }
        </div>
        <CustomButtonComponent>GO TO CHECKOUT</CustomButtonComponent>
    </div>
);

const mapStateToProps = (state) => ({
    cartItems: getCartItems(state)
})

export default connect(mapStateToProps)(CartDropdownComponent);