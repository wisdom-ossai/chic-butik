import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Loader from 'react-loader-spinner';
import './index.css';
import App from './App';
import store from './store/root/root.store';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './store/user/user.actions';
import { createBrowserHistory } from 'history';

let hasRendered = false;
const history = createBrowserHistory()


const AppContainer = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

const PageLoader = (
  <div className="pageLoader">
    <Loader
      type="Circles"
      color="#1b1b1b"
      height={150}
      width={150}
      timeout={2000} //3 secs
    />
  </div>
);

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(AppContainer, document.getElementById('root'));
    hasRendered = true;
  }
}

ReactDOM.render(PageLoader, document.getElementById('root'));

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