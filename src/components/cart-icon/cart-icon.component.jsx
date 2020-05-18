import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.component.scss';
import { ToggleCartVisibility } from '../../store/cart/cart.actions';
import { getTotalItemsInCart } from '../../store/cart/cart.selectors';

const CartIconComponent = ({toggleCartVisibility, totalItemsInCart}) => (
    <div className='cartIcon' onClick={toggleCartVisibility}>
        <ShoppingBagIcon className='shopping-bag-icon' />
        <span className='item-count'>{totalItemsInCart}</span>
    </div>
);

const mapStateToProps = (state) => ({
    totalItemsInCart: getTotalItemsInCart(state)
})
const mapDispatchToProps = dispatch => ({
    toggleCartVisibility: () => dispatch(ToggleCartVisibility())
})

export default connect(mapStateToProps, mapDispatchToProps) (CartIconComponent);