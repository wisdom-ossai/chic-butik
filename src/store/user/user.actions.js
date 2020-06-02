export const UserActionTypes = {
    
    SIGNIN_WITH_GOOGLE_START: 'SIGNIN_WITH_GOOGLE_START',
    SIGNIN_WITH_EMAIL_START: 'SIGNIN_WITH_EMAIL_START',
    SIGNIN_SUCCESS: 'SIGNIN_SUCCESS',

    SIGNOUT_START: 'SIGNOUT_START',
    SIGNOUT_SUCCESS: 'SIGNOUT_SUCCESS',

    SIGNUP_START: 'SIGNUP_START',
    SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',

    AUTHENTICATION_FAILURE: 'AUTHENTICATION_FAILURE',
}

export const SigninWithGoogleStart = user => ({
    type: UserActionTypes.SIGNIN_WITH_GOOGLE_START
})

export const SigninWithEmailStart = ({email, password}) => ({
    type: UserActionTypes.SIGNIN_WITH_EMAIL_START,
    payload: {email, password}
})

export const SigninSuccess = user => ({
    type: UserActionTypes.SIGNIN_SUCCESS,
    payload: user
})

export const AuthenticationFailure = message => ({
    type: UserActionTypes.AUTHENTICATION_FAILURE,
    payload: message
})

export const SignOutStart = () => ({
    type: UserActionTypes.SIGNOUT_START
})

export const SignOutSuccess = () => ({
    type: UserActionTypes.SIGNOUT_SUCCESS
})

export const SignUpStart = (inputFields) => ({
    type: UserActionTypes.SIGNUP_START,
    payload: inputFields
})

export const SignUpSuccess = () => ({
    type: UserActionTypes.SIGNUP_SUCCESS
})
