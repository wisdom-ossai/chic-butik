

export const ShopActionTypes = {
    LOAD_SHOP_DATA_START: 'LOAD_SHOP_DATA_START', 
    LOAD_SHOP_DATA_SUCCESS: 'LOAD_SHOP_DATA_SUCCESS', 
    LOAD_SHOP_DATA_FAILURE: 'LOAD_SHOP_DATA_FAILURE',
};

export const LoadShopData = () => ({
    type: ShopActionTypes.LOAD_SHOP_DATA_START
});

export const LoadShopDataSuccess = (shopData) => ({
    type: ShopActionTypes.LOAD_SHOP_DATA_SUCCESS,
    payload: shopData
});

export const LoadShopDataFailure = (errorMassage) => ({
    type: ShopActionTypes.LOAD_SHOP_DATA_FAILURE,
    payload: errorMassage
});
