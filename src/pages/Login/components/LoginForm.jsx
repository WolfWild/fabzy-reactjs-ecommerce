import React from 'react';
import InputField from '../../../components/Form/InputField';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
LoginForm.propTypes = {};

function LoginForm(props) {
    const {
        control,
        register,
        watch,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: { email: '', password: '' },
    });
    const watchPassword = watch('password', '');
    const registerRules = {
        email: {
            required: {
                value: true,
                message: 'Please enter your email',
            },
            pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: 'You must enter a valid email',
            },
        },
        password: {
            required: {
                value: true,
                message: 'Please enter your password',
            },
            min: {
                value: 6,
                message: 'Passwords must be at least 6 characters',
            },
        },
    };
    const handleSubmitForm = (values) => {
        console.log(values);
    };
    return (
        <form className="login__column" onSubmit={handleSubmit(handleSubmitForm)}>
            <div className="form__field">
                <div className="form__group">
                    <Controller
                        name="email"
                        control={control}
                        rules={registerRules.email}
                        render={({ field }) => (
                            <InputField {...field} checkError={!!errors?.email} type="text" label="Email" />
                        )}
                    />
                    {errors?.email && <span className="form__error">{errors?.email.message}</span>}
                </div>
                <div className="form__group">
                    <Controller
                        name="password"
                        control={control}
                        rules={registerRules.password}
                        render={({ field }) => (
                            <InputField {...field} checkError={!!errors?.password} type="password" label="Password" />
                        )}
                    />
                    {errors?.password && <span className="form__error">{errors?.password.message}</span>}
                </div>
            </div>
            <div className="form__action">
                <button className="btn btn--primary btn--inline">Login</button>
                <Link to="">Forgot your password?</Link>
            </div>
        </form>
    );
}

export default LoginForm;
