import { takeEvery, call, put } from 'redux-saga/effects';
import { ShopActionTypes, LoadShopDataSuccess, LoadShopDataFailure } from './shop.actions';
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

export function* LoadCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(LoadShopDataSuccess(collectionsMap))
    } catch (err) {
        yield put(LoadShopDataFailure(err.massage))
    }
}

export function* LoadShopData() {
    yield takeEvery(ShopActionTypes.LOAD_SHOP_DATA_START, LoadCollectionsAsync)
}