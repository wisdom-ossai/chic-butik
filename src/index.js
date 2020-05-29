import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './App';
import { store, persistor} from './store/root/root.store';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './store/user/user.actions';
import { LoadDirectoryData } from './store/directory/directory.actions';
import { createBrowserHistory } from 'history';
import PageLoader from './components/page-loader/page-loader.component';
import { LoadingShopData, SetShopData } from './store/shop/shop.actions';
import { LoadingDirectoryData } from './store/directory/directory.actions';
import { firestore, convertCollectionsSnapshotToMap, convertDirectoriesSnapshotToMap } from './firebase/firebase.utils';

let hasRendered = false;
const history = createBrowserHistory()


const getCollectionsFromFirebase = () => {
  const collectionRef = firestore.collection('collections');
  const directoryRef = firestore.collection('directories');


  collectionRef.onSnapshot(async snapshot => {
    const collectionsMap = await convertCollectionsSnapshotToMap(snapshot);
    await store.dispatch(SetShopData(collectionsMap));
    await store.dispatch(LoadingShopData(false))
  });

  directoryRef.onSnapshot(async snapshot => {
    const directoriesMap = await convertDirectoriesSnapshotToMap(snapshot);
    await store.dispatch(LoadDirectoryData(directoriesMap));
    await store.dispatch(LoadingDirectoryData(false))
  });
}

const storeDispatches = (user) => {
  store.dispatch(setCurrentUser(user));
  store.dispatch(LoadingShopData(true));
  store.dispatch(LoadingDirectoryData(true));
}

const AppContainer = (
  <Provider store={store}>
    <Router history={history}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>
);

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(AppContainer, document.getElementById('root'));
    hasRendered = true;
  }
}

ReactDOM.render(<PageLoader />, document.getElementById('root'));

auth.onAuthStateChanged(async userAuth => {
  if (userAuth) {
    const userRef = await createUserProfileDocument(userAuth);
    userRef.onSnapshot(snapshot => {
      const user = {
        id: snapshot.id,
        ...snapshot.data()
      };
      storeDispatches(user);
      getCollectionsFromFirebase();
      renderApp();
      if (history.location.pathname === '/signin') {
        history.push('/')
      };
    });
  } else {
    store.dispatch(setCurrentUser(userAuth));
    renderApp();
    history.push('/signin')
  }
})