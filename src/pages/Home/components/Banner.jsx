import { faStar, faEye, faHeart, faFile, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

Banner.propTypes = {};

function Banner(props) {
    return (
        <section className="banner section">
            <div className="container">
                <div className="banner__main">
                    <div className="banner__item">
                        <figure>
                            <Link to="">
                                <img
                                    src="https://tmdemo6.mybigcommerce.com/product_images/uploaded_images/cms01.jpg"
                                    alt=""
                                />
                            </Link>
                        </figure>
                        <figure>
                            <Link to="">
                                <img
                                    src="https://tmdemo6.mybigcommerce.com/product_images/uploaded_images/cms-02.jpg"
                                    alt=""
                                />
                            </Link>
                        </figure>
                    </div>
                    <div className="banner__item">
                        <figure>
                            <Link to="">
                                <img
                                    src="https://tmdemo6.mybigcommerce.com/product_images/uploaded_images/cms-03.jpg"
                                    alt=""
                                />
                            </Link>
                        </figure>
                    </div>
                    <div className="banner__item">
                        <figure>
                            <Link to="">
                                <img
                                    src="https://tmdemo6.mybigcommerce.com/product_images/uploaded_images/cms-04.jpg"
                                    alt=""
                                />
                            </Link>
                        </figure>
                        <figure>
                            <Link to="">
                                <img
                                    src="https://tmdemo6.mybigcommerce.com/product_images/uploaded_images/cms-05.jpg"
                                    alt=""
                                />
                            </Link>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
