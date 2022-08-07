import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CheckBoxField from '../../../../components/Form/CheckboxField';
import brands from '../../../../assets/data/brand';
FilterByTag.propTypes = {
    onChange: PropTypes.func.isRequired,
};
FilterByTag.propTypes = {
    onChange: PropTypes.func.isRequired,
};

function FilterByTag({ onChange }) {
    const [tag, setTag] = useState([]);
    const handleValueChange = (checked, value) => {
        if (checked) {
            const newTag = [...tag, value];
            onChange(newTag);
            setTag(newTag);
        } else {
            const newTag = tag.filter((item) => item !== value);
            onChange(newTag);
            setTag(newTag);
        }
    };
    return (
        <div className="widget">
            <h3 className="widget__ttl">BRAND</h3>
            <div className="widget__main">
                <div className="widget__list">
                    {brands.map((item, index) => (
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

export default FilterByTag;
