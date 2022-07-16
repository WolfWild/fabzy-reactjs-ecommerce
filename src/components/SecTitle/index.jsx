import React from 'react';
import PropTypes from 'prop-types';

SecTitle.propTypes = {
    title: PropTypes.string.isRequired,
    titleBold: PropTypes.string.isRequired,
};

function SecTitle({ title = '', titleBold = '', isLine }) {
    return (
        <div className={isLine ? 'section__ttl section__ttl--bgWhite' : 'section__ttl'}>
            <h2>
                {title} <span>{titleBold}</span>
            </h2>
        </div>
    );
}

export default SecTitle;
