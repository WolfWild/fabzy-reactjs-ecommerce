import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
NotFound.propTypes = {};

function NotFound(props) {
    return (
        <div className="notFound section">
            <div className="container">
                <h2 className="notFound__ttl">404 | Not Found</h2>
                <img
                    src="https://mironmahmud.com/greeny/assets/ltr/images/error.png"
                    alt=""
                    className="notFound__img"
                />
                <p className="notFound__txt">
                    OOOPPS! THIS PAGE CAN'T BE FOUND.
                    <small>It looks like nothing was found at this location.</small>
                </p>
                <Link to="/" className="btn btn--inline btn--primary">
                    Return Home
                </Link>
            </div>
        </div>
    );
}

export default NotFound;
