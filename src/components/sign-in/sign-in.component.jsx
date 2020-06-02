import React, { useState } from 'react';
import './sign-in.component.scss';
import FormInputComponent from '../form-input/form-input.component'
import CustomButtonComponent from '../custom-button/custom-button.component';
import { SigninWithGoogleStart, SigninWithEmailStart } from '../../store/user/user.actions';
import { connect } from 'react-redux';

const SignInComponent = ({ startGoogleSignin, startEmailSignin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetInputs = () => {
    setEmail('');
    setPassword('');
  }

  const handleSubmit = e => {
    e.preventDefault();
    startEmailSignin(email, password);
    resetInputs();
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
            type='button'
          isGoogleSignIn={true}
            onClick={startGoogleSignin}
        >
          SIGN IN WITH GOOGLE
        </CustomButtonComponent>
      </div>
      </form>
    </div>
  );
  
}

const mapDispatchToProps = dispatch => ({
  startGoogleSignin: () => dispatch(SigninWithGoogleStart()),
  startEmailSignin: (email, password) => dispatch(SigninWithEmailStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignInComponent);