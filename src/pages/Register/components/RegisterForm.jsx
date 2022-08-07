import React from 'react';
import InputField from '../../../components/Form/InputField';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
RegisterForm.propTypes = {};
function RegisterForm(props) {
    const {
        control,
        register,
        watch,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: { fullName: '', email: '', phone: '', address: '', password: '', repeatPassword: '' },
    });
    const watchPassword = watch('password', '');
    const registerRules = {
        fullName: {
            required: {
                value: true,
                message: 'Please enter your name',
            },
        },
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
        phone: {
            required: {
                value: true,
                message: 'Please enter your phone',
            },
            pattern: {
                value: /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
                message: 'You must enter a valid phone',
            },
        },
        address: {
            required: {
                value: true,
                message: 'Please enter your address',
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
        repeatPassword: {
            required: {
                value: true,
                message: 'Please enter repeat password',
            },
            validate: {
                positive: (value) => value === watchPassword || 'Your passwords do not match.',
            },
        },
    };
    const handleSubmitForm = (values) => {
        console.log(values);
        toast.success('Register Successfully!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    return (
        <form className="registerForm" onSubmit={handleSubmit(handleSubmitForm)}>
            <div className="form__field form__field--half">
                <div className="form__group">
                    <Controller
                        name="fullName"
                        control={control}
                        rules={registerRules.fullName}
                        render={({ field }) => <InputField {...field} checkError={!!errors?.fullName} type="text" label="Full Name" />}
                    />
                    {errors?.fullName && <span className="form__error">{errors?.fullName.message}</span>}
                </div>
                <div className="form__group">
                    <Controller
                        name="email"
                        control={control}
                        rules={registerRules.email}
                        render={({ field }) => <InputField {...field} checkError={!!errors?.email} type="text" label="Email" />}
                    />
                    {errors?.email && <span className="form__error">{errors?.email.message}</span>}
                </div>
                <div className="form__group">
                    <Controller
                        name="phone"
                        control={control}
                        rules={registerRules.phone}
                        render={({ field }) => <InputField {...field} checkError={!!errors?.phone} type="text" label="Phone" />}
                    />
                    {errors?.phone && <span className="form__error">{errors?.phone.message}</span>}
                </div>
                <div className="form__group">
                    <Controller
                        name="address"
                        control={control}
                        rules={registerRules.address}
                        render={({ field }) => <InputField {...field} checkError={!!errors?.address} type="text" label="Address" />}
                    />
                    {errors?.address && <span className="form__error">{errors?.address.message}</span>}
                </div>
                <div className="form__group">
                    <Controller
                        name="password"
                        control={control}
                        rules={registerRules.password}
                        render={({ field }) => <InputField {...field} checkError={!!errors?.password} type="password" label="Password" />}
                    />
                    {errors?.password && <span className="form__error">{errors?.password.message}</span>}
                </div>
                <div className="form__group">
                    <Controller
                        name="repeatPassword"
                        control={control}
                        rules={registerRules.repeatPassword}
                        render={({ field }) => <InputField {...field} checkError={!!errors?.repeatPassword} type="password" label="Repeat Password" />}
                    />
                    {errors?.repeatPassword && <span className="form__error">{errors?.repeatPassword.message}</span>}
                </div>
            </div>
            <div className="form__action">
                <button className="btn btn--primary btn--inline">Create Account</button>
            </div>
        </form>
    );
}

export default RegisterForm;
