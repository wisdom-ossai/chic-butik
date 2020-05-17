import React from 'react';
import './App.css';
import HomeComponent from './components/pages/home/home.component';
import { Route, Switch } from 'react-router-dom';
import { ShopComponent } from './components/pages/shop/shop.component';
import HeaderComponent from './components/header/header.component';
import AuthenticationComponent from './components/pages/authentication/authentication.component';


const App = () => (
      <div className="App">
        <HeaderComponent />
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/shop" component={ShopComponent} />
          <Route exact path="/signin" component={AuthenticationComponent} />
        </Switch>
      </div>
    );
export default App;
