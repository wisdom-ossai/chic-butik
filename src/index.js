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
import { createBrowserHistory } from 'history';
import PageLoader from './components/page-loader/page-loader.component';

let hasRendered = false;
const history = createBrowserHistory()

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
      store.dispatch(setCurrentUser(user));
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