import React, { useRef } from 'react';
import PropTypes from 'prop-types';

CheckBoxField.propTypes = {
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool,
};

function CheckBoxField({ label, onChange, checked }) {
    const checkboxRef = useRef(null);
    const handleValueChange = (e) => {
        onChange(checkboxRef.current);
    };
    return (
        <label className="form__checkbox">
            <input type="checkbox" ref={checkboxRef} onChange={handleValueChange} checked={checked} />
            {label}
        </label>
    );
}

export default CheckBoxField;
