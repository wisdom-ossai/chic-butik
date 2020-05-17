import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.component.scss';
import { ToggleCartVisibility } from '../../store/cart/cart.actions';

const CartIconComponent = ({toggleCartVisibility}) => (
    <div className='cartIcon' onClick={toggleCartVisibility}>
        <ShoppingBagIcon className='shopping-bag-icon' />
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartVisibility: () => dispatch(ToggleCartVisibility())
})

export default connect(null, mapDispatchToProps) (CartIconComponent);