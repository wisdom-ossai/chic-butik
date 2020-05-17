import React from 'react';
import './App.css';
import HomeComponent from './components/pages/home/home.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ShopComponent } from './components/pages/shop/shop.component';
import HeaderComponent from './components/header/header.component';
import AuthenticationComponent from './components/pages/authentication/authentication.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './store/user/user.actions';


class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      console.log('auth state changed', userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          const user = {
            id: snapshot.id,
            ...snapshot.data()
          };
          setCurrentUser(user);
        });
      } else {
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/shop" component={ShopComponent} />
          <Route exact path="/sign-in" render={() => this.props.currentUser ? (<Redirect to="/" />): (<AuthenticationComponent />)} />
        </Switch>
      </div>
    );
  }
  
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
