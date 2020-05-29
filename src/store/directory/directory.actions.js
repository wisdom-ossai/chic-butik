import { firestore, convertDirectoriesSnapshotToMap } from "../../firebase/firebase.utils";

export const DirectoryActionTypes = {
    GET_DIRECTORY_DATA: 'GET_DIRECTORY_DATA',
    GET_DIRECTORY_DATA_SUCCESS: 'GET_DIRECTORY_DATA_SUCCESS',
    GET_DIRECTORY_DATA_FAILURE: 'GET_DIRECTORY_DATA_FAILURE',
}

export const LoadDirectoryData = () => ({
    type: DirectoryActionTypes.GET_DIRECTORY_DATA,
});

export const LoadDirectoryDataSuccess = (data) => ({
    type: DirectoryActionTypes.GET_DIRECTORY_DATA_SUCCESS,
    payload: data
});

export const LoadDirectoryDataFailure = (errorMessage) => ({
    type: DirectoryActionTypes.GET_DIRECTORY_DATA_FAILURE,
    payload: errorMessage
});

export const StartFetchDirectoryData = (data) => {
    return dispatch => {
        dispatch(LoadDirectoryData());
        const directoryRef = firestore.collection('directories');
        directoryRef.get()
            .then(snapshot => {
            const directoriesMap = convertDirectoriesSnapshotToMap(snapshot);
            dispatch(LoadDirectoryDataSuccess(directoriesMap));
            })
            .catch(err => dispatch(LoadDirectoryDataFailure(err.message)));
    }
};
