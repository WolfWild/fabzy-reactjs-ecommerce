import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddToCart from '../../../components/Form/AddToCart';

FormAddToCart.propTypes = {
    onChange: PropTypes.func.isRequired,
};

function FormAddToCart({ onChange }) {
    const [quantity, setQuantity] = useState(1);
    const handleQuantityChange = (value) => {
        setQuantity(value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onChange(quantity);
    };
    return (
        <form className="addToCart" onSubmit={handleSubmit}>
            <label htmlFor="" className="addToCart__label">
                Quantity:
            </label>
            <AddToCart onChange={handleQuantityChange} />
            <button className="btn btn--primary btn--inline">ADD TO CART</button>
        </form>
    );
}

export default FormAddToCart;
