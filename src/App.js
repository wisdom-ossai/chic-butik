import React from 'react';
import './App.css';
import HomeComponent from './components/pages/home/home.component';
import { Route, Switch } from 'react-router-dom';
import { ShopComponent } from './components/pages/shop/shop.component';
import HeaderComponent from './components/header/header.component';
import AuthenticationComponent from './components/pages/authentication/authentication.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      console.log('auth state changed', userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState(() => {
            return {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data()
              }
            }
          });
        });
      } else {
        this.setState(() => ({ currentUser: userAuth }));
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/shop" component={ShopComponent} />
          <Route path="/sign-in" component={AuthenticationComponent} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
