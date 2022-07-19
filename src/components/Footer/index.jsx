import {
    faMagnifyingGlass,
    faPaperPlane,
    faLocationDot,
    faAngleRight,
    faPhone,
    faEnvelope,
    faCircleArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import Subscribe from '../Subscribe';
function Footer(props) {
    const backTopRef = useRef(null);

    useEffect(() => {
        const backTopShow = () => {
            if (window.scrollY > 100) {
                backTopRef.current.classList.add('is-show');
            } else {
                backTopRef.current.classList.remove('is-show');
            }
        };
        window.addEventListener('scroll', backTopShow);
        return () => {
            window.removeEventListener('scroll', backTopShow);
        };
    }, []);

    const goToTop = () => {
        window.scroll({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Subscribe />
            <footer className="footer">
                <div className="footer__top">
                    <div className="container">
                        <div className="footer__grid">
                            <div className="footer__column">
                                <Link to="/" className="footer__logo">
                                    <img
                                        src="https://cdn11.bigcommerce.com/s-12ea9/images/stencil/original/logo_1544517450__77426.original.png"
                                        alt=""
                                    />
                                </Link>
                                <p className="footer__desc">
                                    Many desktop publishig packages the web page editors now use Many desktop publishing
                                    lorem ipsum.
                                </p>
                            </div>
                            <div className="footer__column footer__column--center">
                                <div className="footer__column__main">
                                    <h3 className="footer__ttl">NAVIGATE</h3>
                                    <ul className="footer__list">
                                        <li>
                                            <FontAwesomeIcon icon={faAngleRight} />
                                            <Link to="">Shipping & Returns</Link>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faAngleRight} />
                                            <Link to="">RSS Syndication</Link>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faAngleRight} />
                                            <Link to="">Blog</Link>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faAngleRight} />
                                            <Link to="">Sitemap</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer__column footer__column--center">
                                <div className="footer__column__main">
                                    <h3 className="footer__ttl">CATEGORIES</h3>
                                    <ul className="footer__list">
                                        <li>
                                            <FontAwesomeIcon icon={faAngleRight} />
                                            <Link to="">Tops</Link>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faAngleRight} />
                                            <Link to="">Denims</Link>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faAngleRight} />
                                            <Link to="">Accessories</Link>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faAngleRight} />
                                            <Link to="">Party Wear</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer__column footer__column--center">
                                <div className="footer__column__main">
                                    <h3 className="footer__ttl">INFORMATION</h3>
                                    <ul className="footer__info">
                                        <li>
                                            <FontAwesomeIcon icon={faLocationDot} />
                                            <span>
                                                33 New Montgomery San<br></br> Francisco St. Ste 750 San<br></br>{' '}
                                                Francisco, CA, USA 94105
                                            </span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faPhone} />
                                            <span>1234567890</span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                            <span>hoangqua3072012@gmail.com</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="container">
                        <p>© 2022 TemplateMela Store.Powered by Rouki</p>
                    </div>
                </div>
            </footer>
            <button ref={backTopRef} className="scrollUp" onClick={goToTop}>
                <FontAwesomeIcon icon={faCircleArrowUp} />
            </button>
        </>
    );
}

export default Footer;
