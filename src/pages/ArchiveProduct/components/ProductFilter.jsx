import React from 'react';
import PropTypes from 'prop-types';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';
import FilterByTag from './Filters/FilterByTag';
import FilterByRating from './Filters/FilterByRating';

ProductFilter.propTypes = {
    onChange: PropTypes.func.isRequired,
    filter: PropTypes.object.isRequired,
};

function ProductFilter({ onChange, filter }) {
    const handleFilterByPrice = (values) => {
        const newFilter = {
            ...filter,
            ...values,
        };
        onChange(newFilter);
    };
    const handleFilterByCategory = (values) => {
        const newFilter = {
            ...filter,
            category: values,
        };
        onChange(newFilter);
    };
    const handleFilterByTag = (values) => {
        const newFilter = {
            ...filter,
            tag: values,
        };
        onChange(newFilter);
    };
    const handleFilterByRating = (values) => {
        const newFilter = {
            ...filter,
            rating: values,
        };
        onChange(newFilter);
    };
    return (
        <>
            <FilterByPrice onChange={handleFilterByPrice} />
            <FilterByCategory onChange={handleFilterByCategory} />
            <FilterByTag onChange={handleFilterByTag} />
            <FilterByRating onChange={handleFilterByRating} />
        </>
    );
}

export default ProductFilter;
