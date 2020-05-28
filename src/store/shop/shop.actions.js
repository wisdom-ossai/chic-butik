
export const ShopActionTypes = {
    GET_SHOP_DATA: 'GET_SHOP_DATA'
};

export const SetShopData = (shopData) => ({
    type: ShopActionTypes.GET_SHOP_DATA,
    payload: shopData
})