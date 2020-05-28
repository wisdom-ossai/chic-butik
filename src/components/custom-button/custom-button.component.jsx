import React from 'react';
import { CustomButtonContainer } from './custom-button.styled';

const CustomButtonComponent = ({ children, ...props }) => (
  <CustomButtonContainer {...props} className='custom-button'>
    {children}
  </CustomButtonContainer>
);

export default CustomButtonComponent;