import React from 'react';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIconComponent from '../cart-icon/cart-icon.component';
import CartDropdownComponent from '../cart-dropdown/cart-dropdown.component';
import { getCurrentUser } from '../../store/user/user.selectors';
import { showCartContainer } from '../../store/cart/cart.selectors';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styled';

const HeaderComponent = ({ currentUser, showCart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <img src="../../logo.png" alt="Logo" height="90px" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>
      <OptionLink to="/contact">
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/sign-in">
          SIGN IN
        </OptionLink>
        )}
      
      <CartIconComponent />
    </OptionsContainer>
    {showCart && <CartDropdownComponent />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: getCurrentUser,
  showCart: showCartContainer,
});

export default connect(mapStateToProps)(HeaderComponent);