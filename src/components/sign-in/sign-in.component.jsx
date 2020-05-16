import React from 'react';
import './sign-in.component.scss';
import FormInputComponent from '../form-input/form-input.component'
import CustomButtonComponent from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignInComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState(prevState => {
            return {
                email: '',
                password: ''
            }
        })
    }

    handleInputChange = e => {
        const { value, name } = e.target;

        this.setState(() => {
            return {
                [name]: value
            }
        })
    }

    render() {
        return (
          <div className="Sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
              <FormInputComponent
                type="email"
                name="email"
                value={this.state.email}
                handleChange={this.handleInputChange}
                label="Email"
                required
              />
              <FormInputComponent
                type="password"
                name="password"
                value={this.state.password}
                handleChange={this.handleInputChange}
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
}

export default SignInComponent;