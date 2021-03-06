import React, { Component } from 'react';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { signInWithGoogle } from '../../firebase/firebase.utility';


import './SignIn.styles.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password:'' });
    console.log('this is submitted')
  }

  hangleChange = event => {
    const { name, value } = event.target.name;

    this.setState({ [name]: value });
    console.log('this is changing')
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email" 
            type="email" 
            defaultValue={this.state.email} 
            handleChange={this.handleChange} 
            label='email'
            required 
          />
          <FormInput 
            name="password" 
            type="password" 
            defaultValue={this.state.password}
            handleChange={this.handleChange} 
            label='password'
            required 
          />
          <div className='buttons'>
            <CustomButton type="submit"> Sign In </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn> 
              Sign in with Google 
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;