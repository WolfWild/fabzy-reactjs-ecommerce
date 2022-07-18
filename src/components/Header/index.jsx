import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faGift, faPhone, faCartPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import SearchForm from './components/SearchForm';
import CartTop from './components/CartTop';

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
                        <nav className="header__nav navHeader">
                            <div className="searchHeader searchHeader--sp">
                                <form className="searchHeader__form">
                                    <input
                                        type="text"
                                        className="form__input form__input--bgGray"
                                        placeholder="Search the store"
                                    />
                                    <button className="searchBtn searchBtn--bgGray">
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </button>
                                </form>
                            </div>
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
                        </nav>
                        <div className="header__widget">
                            <div className="header__widget--left">
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
                            </div>
                            <div className="header__widget--right">
                                <CartTop />
                                <SearchForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
