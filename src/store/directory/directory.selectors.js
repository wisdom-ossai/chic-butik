import { createSelector } from "reselect";


const getDirectoryState = state => state.directory;

export const getDirectoryData = createSelector(
    getDirectoryState,
    directory => directory.data
)

export const getErrorMessageDirectoryData = createSelector(
    getDirectoryState,
    directory => directory.errorMessage
)

export const isDirectoryDataLoading = createSelector(
    getDirectoryState,
    directory => directory.isLoading
)