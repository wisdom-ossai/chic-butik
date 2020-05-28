import { InitialShopState } from "./shop.state";
import { ShopActionTypes } from "./shop.actions";

export const shopReducer = (state = InitialShopState, action) => {
    switch (action.type) {
        case ShopActionTypes.GET_SHOP_DATA:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}