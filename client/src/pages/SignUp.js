import React, { Component } from 'react';
import SignUpForm from '../components/signUpForm';
import Nav from '../components/Nav';

class Login extends Component {
    render() {
        return (
            console.log('Login Component'),
            <div>
                <Nav />
                <SignUpForm />
            </div>
        );
    }
}
export default Login;