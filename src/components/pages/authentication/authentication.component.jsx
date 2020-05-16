import React from 'react';

import SignInComponent from '../../sign-in/sign-in.component'

import './authentication.component.scss';
import SignUpComponent from '../../sign-up/sign-up.component';

const AuthenticationComponent = () => (
    <div className="AuthenticationContainer">
        <SignInComponent />
        <SignUpComponent />
    </div>
)

export default AuthenticationComponent