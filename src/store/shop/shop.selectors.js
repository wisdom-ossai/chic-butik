import { createSelector } from "reselect";

const getShopStore = store => store.shop;


export const getShopData = createSelector(
    getShopStore,
    shop => shop.data
)