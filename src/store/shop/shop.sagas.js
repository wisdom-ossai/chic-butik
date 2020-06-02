import { takeEvery, call, all, put } from 'redux-saga/effects';
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

export function* LoadShopDataStart() {
    yield takeEvery(ShopActionTypes.LOAD_SHOP_DATA_START, LoadCollectionsAsync)
}

export default function* shopSagas() {
    yield all([
        call(LoadShopDataStart)
    ])
}