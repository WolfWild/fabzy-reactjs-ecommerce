import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Rating from '../../Rating';

CheckBoxRating.propTypes = {
    onChange: PropTypes.func.isRequired,
    label: PropTypes.number.isRequired,
    checked: PropTypes.bool,
};

function CheckBoxRating({ label, onChange, checked }) {
    const checkboxRef = useRef(null);
    const handleValueChange = (e) => {
        onChange(checkboxRef.current);
    };
    return (
        <label className="form__checkbox">
            <input type="checkbox" ref={checkboxRef} onChange={handleValueChange} checked={checked} />
            <Rating star={label} />
        </label>
    );
}

export default CheckBoxRating;
