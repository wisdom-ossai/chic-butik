import React from 'react';
import { createStructuredSelector } from 'reselect';
import './App.css';
import HomeComponent from './components/pages/home/home.component';
import { Route, Switch } from 'react-router-dom';
import ShopComponent from './components/pages/shop/shop.component';
import HeaderComponent from './components/header/header.component';
import AuthenticationComponent from './components/pages/authentication/authentication.component';
import CheckoutComponent from './components/pages/checkout/checkout.component';
import { addCollectionAndDocuments } from './firebase/firebase.utils';
import { getCollectionsForPreview } from './store/shop/shop.selectors';
import { connect } from 'react-redux';


class App extends React.Component {

  componentDidMount() {
    console.log('component mounted')
    const data = this.props.documentToFirebase.map(({title, items}) => ({title, items}))
    addCollectionAndDocuments('collections', data);
  }

  render = () => {
    return (
      <div className="App" >
        <HeaderComponent />
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/shop" component={ShopComponent} />
          <Route exact path="/checkout" component={CheckoutComponent} />
          <Route exact path="/signin" component={AuthenticationComponent} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  documentToFirebase: getCollectionsForPreview
})

export default connect(mapStateToProps)(App);