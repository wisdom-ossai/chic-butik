import InitialCartState from './cart.state';
import {CartActionTypes} from './cart.actions';
import { addItemToCart, decreaseCartItemQuantity } from './cart.utils';

const cartReducer = (state = InitialCartState, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_VISIBILITY:
            return {
                ...state,
                showCart: !state.showCart
            };

        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                items: addItemToCart(state.items, action.payload)
            };
    
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
    
        case CartActionTypes.DECREASE_CART_ITEM_QUANTITY:
            return {
                ...state,
                items: decreaseCartItemQuantity(state.items, action.payload)
            };
    
        default:
            return state;
    }
};

export default cartReducer;