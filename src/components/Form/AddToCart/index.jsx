import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

AddToCart.propTypes = {
    onChange: PropTypes.func.isRequired,
    initQuantity: PropTypes.number,
};
function AddToCart({ onChange, initQuantity = 1 }) {
    const [quantity, setQuantity] = useState(initQuantity);
    const quantityRef = useRef(1);
    const increaseQuantity = () => {
        let newQuantity = Number.parseInt(quantityRef.current.value) + 1;
        setQuantity(newQuantity);
        onChange(newQuantity);
    };
    const decreaseQuantity = () => {
        let newQuantity = Number.parseInt(quantityRef.current.value) - 1;
        newQuantity = newQuantity === 0 ? 1 : newQuantity;
        setQuantity(newQuantity);
        onChange(newQuantity);
    };
    const handleValueChange = (value) => {
        return;
    };
    return (
        <div className="form__quantity">
            <span onClick={decreaseQuantity}>-</span>
            <input type="text" value={quantity} ref={quantityRef} onChange={handleValueChange} />
            <span onClick={increaseQuantity}>+</span>
        </div>
    );
}

export default AddToCart;
