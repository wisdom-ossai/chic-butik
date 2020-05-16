import React, { useState } from 'react';
import CustomButtonComponent from '../custom-button/custom-button.component';
import FormInputComponent from '../form-input/form-input.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.component.scss';


const SignUpComponent = () => {

    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const clearInputs = () => {
        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('passwords don\'t match!')
        } else {
            try {
                const { user } = await auth.createUserWithEmailAndPassword(email, password);
                await createUserProfileDocument(user, { displayName });
                clearInputs();
            } catch (error) {
                console.log('Something went wrong!', error.message);
            }
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

export default SignUpComponent;