import React from 'react';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import CustomButtonComponent from '../custom-button/custom-button.component'
import { connect } from 'react-redux';
import CartItemComponent from '../cart-item/cart-item.component';
import { getCartItems } from '../../store/cart/cart.selectors';
import { ToggleCartVisibility } from '../../store/cart/cart.actions';
import { NoItemText, DropdownContainer, CartItemsContainer } from './cart-dropdown.styled';


const CartDropdownComponent = ({cartItems, history, dispatch}) => (
    <DropdownContainer>
        <CartItemsContainer>
            {
              cartItems.length ? (cartItems.map(item => <CartItemComponent key={item.id} item={item} />)) : (<NoItemText>No item selected</NoItemText>)
            }
        </CartItemsContainer>
        <CustomButtonComponent onClick={() => {
            history.push('/checkout');
            dispatch(ToggleCartVisibility());
        }}>GO TO CHECKOUT</CustomButtonComponent>
    </DropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: getCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdownComponent));