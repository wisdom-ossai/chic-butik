import { createSelector } from "reselect";

const getShopStore = store => store.shop;


export const getShopData = createSelector(
    getShopStore,
    shop => shop.data
);

export const getCollectionsForPreview = createSelector(
    getShopData,
    collections => Object.keys(collections).map(key => collections[key])
)

export const getCollection = urlParam => createSelector(
    getShopData,
    collections => collections[urlParam]
)