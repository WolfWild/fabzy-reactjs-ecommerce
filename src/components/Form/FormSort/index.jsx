import React from 'react';
import PropTypes from 'prop-types';

FormSort.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

function FormSort({ onSubmit }) {
    const handleSortChange = (e) => {
        onSubmit(e.target.value);
    };
    return (
        <div className="form__sort">
            <label htmlFor="sortProduct">Sort By:</label>
            <select name="sort" id="sortProduct" onChange={handleSortChange}>
                <option value="newest">Newest Items</option>
                <option value="bestselling">Best Selling</option>
                <option value="alphaasc">A to Z</option>
                <option value="alphadesc">Z to A</option>
                <option value="priceasc">Price: Ascending</option>
                <option value="pricedesc">Price: Descending</option>
            </select>
        </div>
    );
}

export default FormSort;
