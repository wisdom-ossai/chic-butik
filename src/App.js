import React from 'react';
import './App.css';
import HomeComponent from './components/home/home.component';
import { Route, Switch } from 'react-router-dom';

const HatsPage = () => (
  <h1>Hat page works!</h1>
)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomeComponent} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
