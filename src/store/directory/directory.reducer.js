import InitialDirectoryState from './directory.state';
import { DirectoryActionTypes } from './directory.actions';

const directoryReducer = (state = InitialDirectoryState, action) => {
    switch (action.type) {
        case DirectoryActionTypes.GET_DIRECTORY_DATA:
            console.log('action fired')
            return {
                ...state,
                data: action.payload
            }
    
        default:
            return state;
    }
};

export default directoryReducer;