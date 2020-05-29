import { createSelector } from "reselect";

const getShopStore = store => store.shop;


export const getShopData = createSelector(
    getShopStore,
    shop => shop.data
);

export const isDataLoading = createSelector(
    getShopStore,
    shop => shop.isLoading
);

export const getCollectionsForPreview = createSelector(
    getShopData,
    collections => {
        console.log('collections', collections)
        return collections ? Object.keys(collections).map(key => collections[key]) : []
    }
)

export const getCollection = urlParam => createSelector(
    getShopData,
    collections => collections ? collections[urlParam] : []
)