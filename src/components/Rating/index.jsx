import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

Rating.propTypes = {};

function Rating({ star }) {
    return (
        <div className="rating">
            {Array.from(new Array(5))
                .fill(0)
                .map((item, index) => (
                    <span key={index} className={index < star ? 'rating__full' : 'rating__empty'}>
                        <FontAwesomeIcon icon={faStar} />
                    </span>
                ))}
        </div>
    );
}

export default Rating;
