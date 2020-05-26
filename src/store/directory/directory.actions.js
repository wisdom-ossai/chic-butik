
export const DirectoryActionTypes = {
    GET_DIRECTORY_DATA: 'GET_DIRECTORY_DATA'
}

export const LoadDirectoryData = (data) => ({
    type: DirectoryActionTypes.GET_DIRECTORY_DATA,
    payload: data
});