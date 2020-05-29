import InitialDirectoryState from './directory.state';
import { DirectoryActionTypes } from './directory.actions';

const directoryReducer = (state = InitialDirectoryState, action) => {
    switch (action.type) {
        case DirectoryActionTypes.GET_DIRECTORY_DATA:
            return {
                ...state,
                isLoading: true
            }
        case DirectoryActionTypes.GET_DIRECTORY_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case DirectoryActionTypes.GET_DIRECTORY_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
};

export default directoryReducer;