import { InitialShopState } from "./shop.state";
import { ShopActionTypes } from "./shop.actions";

export const shopReducer = (state = InitialShopState, action) => {
    switch (action.type) {
        case ShopActionTypes.LOAD_SHOP_DATA_START:
            return {
                ...state,
                isLoading: true
            }
        
        case ShopActionTypes.LOAD_SHOP_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        
        case ShopActionTypes.LOAD_SHOP_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}