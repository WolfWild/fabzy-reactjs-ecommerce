import React from 'react';
import PropTypes from 'prop-types';
import AddToCart from '../../../components/Form/AddToCart';

FormAddToCart.propTypes = {
    onChange: PropTypes.func.isRequired,
    productId: PropTypes.number,
    initQuantity: PropTypes.number,
};

function FormAddToCart(props) {
    const { onChange, productId, initQuantity } = props;
    console.log(initQuantity);
    const handleQuantityChange = (value) => {
        const newValue = {
            id: productId,
            quantity: value,
        };
        onChange(newValue);
    };
    return (
        <div>
            <AddToCart onChange={handleQuantityChange} initQuantity={initQuantity} />
        </div>
    );
}

export default FormAddToCart;
