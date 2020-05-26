import { createSelector } from "reselect";


const getDirectoryState = state => state.directory;

export const getDirectoryData = createSelector(
    getDirectoryState,
    directory => directory.data
)