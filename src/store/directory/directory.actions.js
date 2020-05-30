
export const DirectoryActionTypes = {
    LOAD_DIRECTORY_DATA_START: 'LOAD_DIRECTORY_DATA_START',
    LOAD_DIRECTORY_DATA_SUCCESS: 'LOAD_DIRECTORY_DATA_SUCCESS',
    LOAD_DIRECTORY_DATA_FAILURE: 'LOAD_DIRECTORY_DATA_FAILURE',
}

export const LoadDirectoryData = () => ({
    type: DirectoryActionTypes.LOAD_DIRECTORY_DATA_START,
});

export const LoadDirectoryDataSuccess = (data) => ({
    type: DirectoryActionTypes.LOAD_DIRECTORY_DATA_SUCCESS,
    payload: data
});

export const LoadDirectoryDataFailure = (errorMessage) => ({
    type: DirectoryActionTypes.LOAD_DIRECTORY_DATA_FAILURE,
    payload: errorMessage
});
