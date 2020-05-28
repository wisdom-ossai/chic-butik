import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ToggleCartVisibility } from '../../store/cart/cart.actions';
import { getTotalItemsInCart } from '../../store/cart/cart.selectors';
import { IconContainer, ItemCount, ShoppingBagIconStyle } from './cart-icon.styled';

const CartIconComponent = ({toggleCartVisibility, totalItemsInCart}) => (
    <IconContainer onClick={toggleCartVisibility}>
        <ShoppingBagIconStyle />
        <ItemCount>{totalItemsInCart}</ItemCount>
    </IconContainer>
);

const mapStateToProps = createStructuredSelector({
    totalItemsInCart: getTotalItemsInCart
})
const mapDispatchToProps = dispatch => ({
    toggleCartVisibility: () => dispatch(ToggleCartVisibility())
})

export default connect(mapStateToProps, mapDispatchToProps) (CartIconComponent);