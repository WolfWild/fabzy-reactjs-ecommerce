import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CheckBoxRating from '../../../../components/Form/CheckboxRating';

FilterByRating.propTypes = {
    onChange: PropTypes.func.isRequired,
};

function FilterByRating({ onChange }) {
    const [rating, setRating] = useState([]);
    const handleValueChange = (checked, value) => {
        if (checked) {
            const newRating = [...rating, value];
            onChange(newRating);
            setRating(newRating);
        } else {
            const newRating = rating.filter((item) => item !== value);
            onChange(newRating);
            setRating(newRating);
        }
    };
    return (
        <div className="widget">
            <h3 className="widget__ttl">BRAND</h3>
            <div className="widget__main">
                <div className="widget__list">
                    {Array.from(new Array(5))
                        .fill(0)
                        .map((item, index) => (
                            <CheckBoxRating
                                key={index}
                                label={Number.parseInt(index + 1)}
                                onChange={(input) => handleValueChange(input.checked, Number.parseInt(index + 1))}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default FilterByRating;
