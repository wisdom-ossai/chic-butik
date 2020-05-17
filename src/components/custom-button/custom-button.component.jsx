import React from 'react';
import './custom-button.component.scss';

const CustomButtonComponent = ({ children, isGoogleSignIn, invert, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${invert ? 'inverted' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButtonComponent;