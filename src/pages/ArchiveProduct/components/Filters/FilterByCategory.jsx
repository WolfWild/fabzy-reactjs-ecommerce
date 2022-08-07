import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CheckBoxField from '../../../../components/Form/CheckboxField';
import categories from '../../../../assets/data/category';
FilterByCategory.propTypes = {
    onChange: PropTypes.func.isRequired,
};

function FilterByCategory({ onChange }) {
    const [category, setCategory] = useState([]);
    const handleValueChange = (checked, value) => {
        if (checked) {
            const newCategory = [...category, value];
            onChange(newCategory);
            setCategory(newCategory);
        } else {
            const newCategory = category.filter((item) => item !== value);
            onChange(newCategory);
            setCategory(newCategory);
        }
    };
    return (
        <div className="widget">
            <h3 className="widget__ttl">CATEGORY</h3>
            <div className="widget__main">
                <div className="widget__list">
                    {categories.map((item, index) => (
                        <CheckBoxField
                            key={index}
                            label={item.name}
                            onChange={(input) => handleValueChange(input.checked, item.slug)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FilterByCategory;
