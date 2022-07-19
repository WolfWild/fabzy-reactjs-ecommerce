import { faGift, faPhone, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

Service.propTypes = {};

function Service(props) {
    return (
        <>
            <div className="serviceHeader">
                <div className="serviceHeader__main">
                    <div className="serviceHeader__item">
                        <FontAwesomeIcon icon={faTruckFast} />
                        <p className="serviceHeader__ttl">Free shipping</p>
                    </div>
                    <div className="serviceHeader__item">
                        <FontAwesomeIcon icon={faGift} />
                        <p className="serviceHeader__ttl">Special offer</p>
                    </div>
                </div>
            </div>
            <div className="contactHeader">
                <div className="contactHeader__main">
                    <FontAwesomeIcon icon={faPhone} />
                    <p className="contactHeader__ttl">
                        CUSTOMER CARE : <small>(+00) 12 3456 890</small>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Service;
