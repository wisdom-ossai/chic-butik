import React, { useState } from 'react';
import CustomButtonComponent from '../custom-button/custom-button.component';
import FormInputComponent from '../form-input/form-input.component';
import './sign-up.component.scss';
import { SignUpStart } from '../../store/user/user.actions';
import { connect } from 'react-redux';


const SignUpComponent = ({startSignup}) => {

    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('passwords don\'t match!')
        } else {
            startSignup(displayName, email, password);
        }
    }
    
    return (
        <div className='SignUpContainer'>
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInputComponent
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    label="Display Name"
                    required
                    />
                <FormInputComponent type='email' name='email' value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    label="Email Address"
                    required
                    />
                <FormInputComponent type='password' name='password' value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    label="Password"
                    required
                    />
                <FormInputComponent type='password' name='confirmPassword' value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    label="Confirm Password"
                    required
                />
                
                <CustomButtonComponent type='submit'>Sign Up</CustomButtonComponent>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    startSignup: (displayName, email, password) => dispatch(SignUpStart({displayName, email, password}))
})

export default connect(null, mapDispatchToProps)(SignUpComponent);