import React from 'react';
import './App.css';
import HomeComponent from './components/pages/home/home.component';
import { Route, Switch } from 'react-router-dom';
import { ShopComponent } from './components/pages/shop/shop.component';
import HeaderComponent from './components/header/header.component';
import AuthenticationComponent from './components/pages/authentication/authentication.component'
import { auth } from './firebase/firebase.utils';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
   this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState(prevState => {
        return {
          currentUser: user
        }
      })

      console.log(user);
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
