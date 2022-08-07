import React from 'react';
import { Link } from 'react-router-dom';

MenuLinks.propTypes = {};

const menuList = [
    {
        slug: '/',
        name: 'Home',
    },
    {
        slug: '/product',
        name: 'Product',
    },
    {
        slug: '/blog',
        name: 'Blog',
    },
    {
        slug: '/login',
        name: 'Login',
    },
    {
        slug: '/register',
        name: 'Register',
    },
];

function MenuLinks(props) {
    return (
        <ul className="navHeader__list">
            {menuList.length > 0 &&
                menuList.map((item, index) => (
                    <li className="navHeader__item" key={index}>
                        <Link to={item.slug} className="navHeader__link">
                            {item.name}
                        </Link>
                    </li>
                ))}
        </ul>
    );
}

export default MenuLinks;
