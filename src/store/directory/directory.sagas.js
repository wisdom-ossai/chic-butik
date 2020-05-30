import { takeEvery, call, put } from 'redux-saga/effects';
import { DirectoryActionTypes, LoadDirectoryDataFailure, LoadDirectoryDataSuccess } from './directory.actions';
import { firestore, convertDirectoriesSnapshotToMap } from "../../firebase/firebase.utils";

export function* LoadDataAsync() {
    try {
        const directoryRef = firestore.collection('directories');
        const snapshot = yield directoryRef.get();
        const directoriesMap = yield call(convertDirectoriesSnapshotToMap, snapshot);
        yield put(LoadDirectoryDataSuccess(directoriesMap));
    } catch (err) {
        yield put(LoadDirectoryDataFailure(err.message))
    }
};

export function* SagaLoadDirectoryDataStart() {
    yield takeEvery(DirectoryActionTypes.LOAD_DIRECTORY_DATA_START, LoadDataAsync)

}