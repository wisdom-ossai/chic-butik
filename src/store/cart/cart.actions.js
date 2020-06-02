export const CartActionTypes = {
    TOGGLE_CART_VISIBILITY: 'TOGGLE_CART_VISIBILITY',
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
    DECREASE_CART_ITEM_QUANTITY: 'DECREASE_CART_ITEM_QUANTITY',
    CLEAR_CART: 'CLEAR_CART',
}

export const ToggleCartVisibility = () => ({
    type: CartActionTypes.TOGGLE_CART_VISIBILITY
})

export const AddItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const DecreaseCartItemQuantity = item => ({
    type: CartActionTypes.DECREASE_CART_ITEM_QUANTITY,
    payload: item
})

export const RemoveItemFromCart = id => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: id
})

export const ClearCart = () => ({
    type: CartActionTypes.CLEAR_CART
})