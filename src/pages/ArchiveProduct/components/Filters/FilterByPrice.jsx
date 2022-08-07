import React, { useState } from 'react';
import PropTypes from 'prop-types';

FilterByPrice.propTypes = {
    onChange: PropTypes.func.isRequired,
};

function FilterByPrice({ onChange }) {
    const [values, setValues] = useState({
        salePrice_gte: '',
        salePrice_lte: '',
    });
    const handleValueChange = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({
            ...prev,
            [name]: Number.parseInt(value),
        }));
    };
    const handleSubmit = () => {
        if (values.salePrice_gte < values.salePrice_lte) {
            onChange(values);
        }
    };
    return (
        <div className="widget">
            <h3 className="widget__ttl">Price</h3>
            <div className="widget__main">
                <div className="widget__price">
                    <input
                        type="text"
                        name="salePrice_gte"
                        placeholder="Min"
                        className="form__input"
                        value={values.salePrice_gte >= 0 ? values.salePrice_gte : 0}
                        onChange={handleValueChange}
                    />
                    <input
                        type="text"
                        name="salePrice_lte"
                        placeholder="Max"
                        value={values.salePrice_lte >= 0 ? values.salePrice_lte : 0}
                        onChange={handleValueChange}
                        className="form__input"
                    />
                    <button className="btn btn--primary btn--inline btn--small" onClick={handleSubmit}>
                        Update
                    </button>
                    {values.salePrice_lte < values.salePrice_gte && (
                        <span className="form__error">Min price must be less than max. price.</span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FilterByPrice;
