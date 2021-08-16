import React, { Component } from 'react';
import LoginForm from '../components/loginForm';
import Nav from '../components/Nav';

class Login extends Component {
    render() {
        return (
            console.log('Login Component'),
            <div>
                <Nav />
                <LoginForm />
            </div>
        );
    }
}
export default Login;