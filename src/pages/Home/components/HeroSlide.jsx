import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

HeroSlide.propTypes = {};
function SlickNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div onClick={onClick} className={className} style={{ right: '30px' }}>
            <FontAwesomeIcon icon={faArrowRight} />
        </div>
    );
}

function SlickPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div onClick={onClick} className={className} style={{ left: '30px' }}>
            <FontAwesomeIcon icon={faArrowLeft} />
        </div>
    );
}
function HeroSlide(props) {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SlickNextArrow classNameCustomize="slickArrowNext" />,
        prevArrow: <SlickPrevArrow classNameCustomize="slickArrowPrev" />,
    };
    return (
        <section className="heroSlide">
            <Slider {...settings}>
                <div className="heroSlide__item">
                    <figure className="heroSlide__img">
                        <img
                            src="https://cdn11.bigcommerce.com/s-12ea9/images/stencil/1920w/carousel/11/Main-Banner-01_1.jpg?c=2"
                            alt=""
                        />
                    </figure>
                    <div className="heroSlide__content">
                        <div className="container">
                            <h2 className="heroSlide__ttl">On Trend Jersey</h2>
                            <p className="heroSlide__txt">
                                everything 40% flat on handbags, clothes and all items of girls
                            </p>
                            <Link to="" className="btn btn--inline btn--black">
                                SHOP NOW
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="heroSlide__item">
                    <figure className="heroSlide__img">
                        <img
                            src="https://cdn11.bigcommerce.com/s-12ea9/images/stencil/1280w/carousel/12/Main-Banner-02_1.jpg?c=2"
                            alt=""
                        />
                    </figure>
                    <div className="heroSlide__content">
                        <div className="container">
                            <h2 className="heroSlide__ttl">On Trend Jersey</h2>
                            <p className="heroSlide__txt">
                                everything 40% flat on handbags, clothes and all items of girls
                            </p>
                            <Link to="" className="btn btn--inline btn--black">
                                SHOP NOW
                            </Link>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
    );
}

export default HeroSlide;
