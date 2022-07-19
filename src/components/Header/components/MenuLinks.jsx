import React from 'react';
import { Link } from 'react-router-dom';

MenuLinks.propTypes = {};

function MenuLinks(props) {
    return (
        <ul className="navHeader__list">
            <li className="navHeader__item">
                <Link to="/" className="navHeader__link">
                    TOPS
                </Link>
            </li>
            <li className="navHeader__item">
                <Link to="/product" className="navHeader__link">
                    Product
                </Link>
            </li>
            <li className="navHeader__item">
                <Link to="/blog" className="navHeader__link">
                    Blog
                </Link>
            </li>
            <li className="navHeader__item">
                <Link to="/login" className="navHeader__link">
                    Login
                </Link>
            </li>
            <li className="navHeader__item">
                <Link to="/register" className="navHeader__link">
                    Register
                </Link>
            </li>
        </ul>
    );
}

export default MenuLinks;
