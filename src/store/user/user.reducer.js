import InitialUserState from './user.state';
import { UserActionTypes } from './user.actions';

const userReducer = (state = InitialUserState, action) => {
    switch (action.type) {
        case UserActionTypes.SIGNIN_WITH_EMAIL_START:
        case UserActionTypes.SIGNIN_WITH_GOOGLE_START:
        case UserActionTypes.SIGNOUT_START:
            return {
                ...state,
                errorMessage: null
            }
        case UserActionTypes.SIGNIN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
            };
        case UserActionTypes.SIGNOUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
            };
        case UserActionTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                currentUser: null,
            };
        case UserActionTypes.AUTHENTICATION_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;