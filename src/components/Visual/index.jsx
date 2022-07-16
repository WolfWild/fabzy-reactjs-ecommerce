import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Breadcrumb from '../Breadcrumb';
Visual.propTypes = {};

function Visual({ title }) {
    return (
        <div className="visual">
            <div className="container">
                <h1 className="visual__heading">{title}</h1>
                <Breadcrumb />
            </div>
        </div>
    );
}

export default Visual;
