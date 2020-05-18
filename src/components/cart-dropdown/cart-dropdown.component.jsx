import React from 'react';
import CustomButtonComponent from '../custom-button/custom-button.component'
import './cart-dropdown.component.scss';
import { connect } from 'react-redux';
import CartItemComponent from '../cart-item/cart-item.component';


const CartDropdownComponent = ({cartItems}) => (
    <div className='cartDropdown'>
        <div className='cart-items'>
            {
                cartItems.map(item => <CartItemComponent key={item.id} item={item} />)
            }
        </div>
        <CustomButtonComponent>GO TO CHECKOUT</CustomButtonComponent>
    </div>
);

const mapStateToProps = ({ cart }) => ({
    cartItems: cart.items
})

export default connect(mapStateToProps)(CartDropdownComponent);