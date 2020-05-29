import InitialDirectoryState from './directory.state';
import { DirectoryActionTypes } from './directory.actions';

const directoryReducer = (state = InitialDirectoryState, action) => {
    switch (action.type) {
        case DirectoryActionTypes.GET_DIRECTORY_DATA:
            return {
                ...state,
                data: action.payload
            }
        case DirectoryActionTypes.LOADING_DIRECTORY_DATA:
            return {
                ...state,
                isLoading: action.payload
            }
    
        default:
            return state;
    }
};

export default directoryReducer;