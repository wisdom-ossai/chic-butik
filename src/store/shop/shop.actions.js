
export const ShopActionTypes = {
    GET_SHOP_DATA: 'GET_SHOP_DATA', 
    LOADING_DATA: 'LOADING_DATA'
};

export const SetShopData = (shopData) => ({
    type: ShopActionTypes.GET_SHOP_DATA,
    payload: shopData
});

export const LoadingShopData = (isLoading) => ({
    type: ShopActionTypes.LOADING_DATA,
    payload: isLoading
})