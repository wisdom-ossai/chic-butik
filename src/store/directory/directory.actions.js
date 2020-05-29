
export const DirectoryActionTypes = {
    GET_DIRECTORY_DATA: 'GET_DIRECTORY_DATA',
    LOADING_DIRECTORY_DATA: 'LOADING_DIRECTORY_DATA'
}

export const LoadDirectoryData = (data) => ({
    type: DirectoryActionTypes.GET_DIRECTORY_DATA,
    payload: data
});

export const LoadingDirectoryData = isLoading => ({
    type: DirectoryActionTypes.LOADING_DIRECTORY_DATA,
    payload: isLoading
});