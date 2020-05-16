import React, { useState } from 'react';
import './sign-in.component.scss';
import FormInputComponent from '../form-input/form-input.component'
import CustomButtonComponent from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

const SignInComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetInputs = () => {
    setEmail('');
    setPassword('');
  }

  const handleSubmit = async e => {
      e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      resetInputs();
    } catch (error) {
      console.log('Somthing went wrong while trying to sign in', error.message);
      }
  }

  return (
    <div className="Sign-in">
    <h2>I already have an account</h2>
    <span>Sign in with your email and password</span>

    <form onSubmit={handleSubmit}>
      <FormInputComponent
        type="email"
        name="email"
        value={email}
        handleChange={e => setEmail(e.target.value)}
        label="Email"
        required
      />
      <FormInputComponent
        type="password"
        name="password"
        value={password}
        handleChange={e => setPassword(e.target.value)}
        required
        label="Password"
      />

      <div className="buttons">
        <CustomButtonComponent type="submit">
          SIGN IN
        </CustomButtonComponent>
        <CustomButtonComponent
          isGoogleSignIn={true}
          onClick={signInWithGoogle}
        >
          SIGN IN WITH GOOGLE
        </CustomButtonComponent>
      </div>
      </form>
    </div>
  );
  
}

export default SignInComponent;