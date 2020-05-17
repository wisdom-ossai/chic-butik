export const CartActionTypes = {
    TOGGLE_CART_VISIBILITY: 'TOGGLE_CART_VISIBILITY',
    ADD_ITEM: 'ADD_ITEM'
}

export const ToggleCartVisibility = () => ({
    type: CartActionTypes.TOGGLE_CART_VISIBILITY
})

export const AddItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})