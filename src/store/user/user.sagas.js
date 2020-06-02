import { takeLatest, all, call, put } from 'redux-saga/effects';
import { UserActionTypes, SigninSuccess, AuthenticationFailure, SignOutSuccess, SignUpSuccess, SigninWithEmailStart } from './user.actions';
import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils';
import { ClearCart } from '../cart/cart.actions';


function* signinWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserProfileDocument, user);
        const snapshot = yield userRef.get();
        yield put(SigninSuccess({ id: snapshot.id, ...snapshot.data() }));
    } catch (err) {
        yield put(AuthenticationFailure(err.message));
    }
}

function* signinWithEmail({payload: {email, password}}) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        const userRef = yield call(createUserProfileDocument, user);
        const snapshot = yield userRef.get();
        yield put(SigninSuccess({ id: snapshot.id, ...snapshot.data() }));
    } catch (err) {
        yield put(AuthenticationFailure(err.message));
    }
}

function* signOut() {
    try {
        yield auth.signOut();
        yield put(SignOutSuccess());
        yield put(ClearCart());
    } catch (err) {
        yield put(AuthenticationFailure(err.message));
    }
}

function * signUp({payload: {displayName, email, password}}) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield createUserProfileDocument(user, { displayName });
        yield put(SignUpSuccess())
        yield put(SigninWithEmailStart({email, password}))
    } catch (error) {
        yield put(AuthenticationFailure(error.message));
    }
}

function* StartSigninWithGoogle() {
    yield takeLatest(UserActionTypes.SIGNIN_WITH_GOOGLE_START, signinWithGoogle);
}

function* StartSigninWithEmail() {
    yield takeLatest(UserActionTypes.SIGNIN_WITH_EMAIL_START, signinWithEmail);
}

function* StartSignout() {
    yield takeLatest(UserActionTypes.SIGNOUT_START, signOut)
}

function* StartSignup() {
    yield takeLatest(UserActionTypes.SIGNUP_START, signUp);
}

export default function* userSagas() {
    yield all([
        call(StartSigninWithGoogle),
        call(StartSigninWithEmail),
        call(StartSignout),
        call(StartSignup),
    ])
}