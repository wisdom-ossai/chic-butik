import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

export const ShopActionTypes = {
    GET_SHOP_DATA: 'GET_SHOP_DATA', 
    GET_SHOP_DATA_SUCCESS: 'GET_SHOP_DATA_SUCCESS', 
    GET_SHOP_DATA_FAILURE: 'GET_SHOP_DATA_FAILURE',
};

export const SetShopData = () => ({
    type: ShopActionTypes.GET_SHOP_DATA
});

export const SetShopDataSuccess = (shopData) => ({
    type: ShopActionTypes.GET_SHOP_DATA_SUCCESS,
    payload: shopData
});

export const SetShopDataFailure = (errorMassage) => ({
    type: ShopActionTypes.GET_SHOP_DATA_FAILURE,
    payload: errorMassage
});

export const StartFetchShopData = () => {
    return dispatch => {
        dispatch(SetShopData());
        const collectionRef = firestore.collection('collections');

        collectionRef.get()
            .then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(SetShopDataSuccess(collectionsMap));
            })
            .catch(e => dispatch(SetShopDataFailure(e.massage)));
    }
}