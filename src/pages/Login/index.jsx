import React from 'react';
import { Link } from 'react-router-dom';
import Visual from '../../components/Visual';
import LoginForm from './components/LoginForm';
function Login(props) {
    return (
        <main className="login-page">
            <Visual title="Login" />
            <div className="section">
                <div className="container">
                    <div className="login__grid">
                        <LoginForm />
                        <div className="newCustomer login__column">
                            <h2 className="newCustomer__heading">New Customer?</h2>
                            <p className="newCustomer__txt">Create an account with us and you'll be able to:</p>
                            <ul className="newCustomer__fact">
                                <li>Check out faster</li>
                                <li>Save multiple shipping addresses</li>
                                <li>Access your order history</li>
                                <li>Track new orders</li>
                                <li>Save items to your Wish List</li>
                            </ul>
                            <Link to="/register" className="btn btn--inline btn--primary">
                                Create Account
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Login;
