import React from 'react';
import { Link } from 'react-router-dom';
import './header.component.scss';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIconComponent from '../cart-icon/cart-icon.component';
import CartDropdownComponent from '../cart-dropdown/cart-dropdown.component';
import { getCurrentUser } from '../../store/user/user.selectors';
import { showCartContainer } from '../../store/cart/cart.selectors';

const HeaderComponent = ({ currentUser, showCart }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <img src="../../logo.png" alt="Logo" height="90px" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/sign-in">
          SIGN IN
        </Link>
        )}
      
      <CartIconComponent />
    </div>
    {showCart && <CartDropdownComponent />}
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state),
  showCart: showCartContainer(state),
});

export default connect(mapStateToProps)(HeaderComponent);