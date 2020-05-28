import React from 'react';
import { createStructuredSelector } from 'reselect';
import './App.css';
import HomeComponent from './components/pages/home/home.component';
import { Route, Switch } from 'react-router-dom';
import ShopComponent from './components/pages/shop/shop.component';
import HeaderComponent from './components/header/header.component';
import AuthenticationComponent from './components/pages/authentication/authentication.component';
import CheckoutComponent from './components/pages/checkout/checkout.component';
import { getCollectionsForPreview } from './store/shop/shop.selectors';
import { connect } from 'react-redux';
import { firestore, convertCollectionsSnapshotToMap } from './firebase/firebase.utils'
import { SetShopData } from './store/shop/shop.actions';


class App extends React.Component {

  getCollectionsFromFirebase = () => {
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      this.props.dispatch(SetShopData(collectionsMap));
    });
  }

  componentDidMount() {
    this.getCollectionsFromFirebase();
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