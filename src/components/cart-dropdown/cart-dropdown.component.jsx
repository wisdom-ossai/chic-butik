import React from 'react';
import CustomButtonComponent from '../custom-button/custom-button.component'
import './cart-dropdown.component.scss';


const CartDropdownComponent = () => (
    <div className='cartDropdown'>
        <div className='cart-items'>

        </div>
        <CustomButtonComponent>GO TO CHECKOUT</CustomButtonComponent>
    </div>
);

export default CartDropdownComponent;