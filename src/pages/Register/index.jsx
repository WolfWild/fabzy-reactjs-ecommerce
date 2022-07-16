import React from 'react';
import { Link } from 'react-router-dom';
import Visual from '../../components/Visual';
import RegisterForm from './components/RegisterForm';
function Register(props) {
    return (
        <main className="register-page">
            <Visual title="Register" />
            <div className="section">
                <div className="container">
                    <RegisterForm />
                </div>
            </div>
        </main>
    );
}

export default Register;
