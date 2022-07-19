import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CartTop from './components/CartTop';
import Menu from './components/Menu';
import SearchForm from './components/SearchForm';
import Widget from './components/Widget';

function Header(props) {
    const headerRef = useRef(null);
    useEffect(() => {
        const menuBtn = document.querySelector('.menuBtn');
        const navHeader = document.querySelector('.navHeader');
        const showMenu = () => {
            menuBtn.classList.toggle('is-active');
            navHeader.classList.toggle('is-open');
        };
        menuBtn.addEventListener('click', showMenu);
        return () => {
            menuBtn.removeEventListener('click', showMenu);
        };
    }, []);

    return (
        <div className="header" ref={headerRef}>
            <div className="header__main">
                <div className="header__left">
                    <h1 className="header__logo">
                        <Link to="/">
                            <img
                                src="https://cdn11.bigcommerce.com/s-12ea9/images/stencil/original/logo_1544517450__77426.original.png"
                                alt=""
                            />
                        </Link>
                    </h1>
                </div>
                <div className="header__right">
                    <p className="header__top">NEW OFFER THIS WEEKEND ONLY! HURRY SHOP NOW!</p>
                    <div className="menuBtn menuBtn--toggle">
                        <span></span>
                    </div>
                    <div className="cartHeader cartHeader--sp">
                        <FontAwesomeIcon icon={faCartPlus} />
                        <p className="cartHeader__ttl">view cart</p>
                        <span className="cartHeader__number">1</span>
                    </div>
                    <div className="header__bottom">
                        <Menu />
                        <Widget />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
