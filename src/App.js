import React from 'react';
import './App.css';
import HomeComponent from './components/pages/home/home.component';
import { Route, Switch } from 'react-router-dom';
import { ShopComponent } from './components/pages/shop/shop.component';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomeComponent} />
        <Route path='/shop' component={ShopComponent} />
      </Switch>
    </div>
  );
}

export default App;
