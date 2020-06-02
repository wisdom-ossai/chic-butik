import { all, call } from 'redux-saga/effects';
import directorySagas from '../directory/directory.sagas';
import shopSagas from '../shop/shop.sagas';
import userSagas from '../user/user.sagas';

export default function* rootSaga() {
    yield all([
        call(directorySagas),
        call(shopSagas),
        call(userSagas)
    ])
}