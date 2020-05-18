import { createSelector } from 'reselect'

const getCartState = state => state.cart;

export const getCartItems = createSelector(
    getCartState,
    cart => cart.items
);

export const getTotalItemsInCart = createSelector(
    getCartItems,
    items => items.reduce((accumulatedValue, item) => accumulatedValue + item.quantity, 0)
);

export const getItemsTotalPrice = createSelector(
    getCartItems,
    items => items.reduce((accumulatedValue, item) => accumulatedValue + item.quantity * item.price, 0)
);

export const showCartContainer = createSelector(
    getCartState,
    cart => cart.showCart
)