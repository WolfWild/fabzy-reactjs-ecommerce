import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

Breadcrumb.propTypes = {};

function Breadcrumb(props) {
    return (
        <ul className="breadcrumb">
            <li>
                <Link to="">Home</Link>
            </li>
            <li>
                <Link to="">Blog</Link>
            </li>
        </ul>
    );
}

export default Breadcrumb;
