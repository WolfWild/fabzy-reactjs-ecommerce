import React, { forwardRef } from 'react';
const InputField = forwardRef(({ label, type, checkError, ...props }, ref) => {
    return (
        <>
            <label htmlFor="" className="form__label">
                {label}
            </label>
            <input
                type={type}
                className={checkError ? 'form__input form__input--error' : 'form__input'}
                {...props}
                ref={ref}
            />
        </>
    );
});
export default InputField;
