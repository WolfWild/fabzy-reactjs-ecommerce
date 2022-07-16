import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { getProductBySlug } from '../../assets/data/products';
import Rating from '../../components/Rating';
import Visual from '../../components/Visual';
import FormAddToCart from './components/FormAddToCart';
function SlickNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div onClick={onClick} className={className} style={{ right: '15px' }}>
            <FontAwesomeIcon icon={faArrowRight} />
        </div>
    );
}

function SlickPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div onClick={onClick} className={className} style={{ left: '15px' }}>
            <FontAwesomeIcon icon={faArrowLeft} />
        </div>
    );
}
function ProductDetail(props) {
    const [product, setProduct] = useState({});
    let { slug } = useParams();
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SlickNextArrow classNameCustomize="slickArrowNext" />,
        prevArrow: <SlickPrevArrow classNameCustomize="slickArrowPrev" />,
    };
    useEffect(() => {
        const productDetail = getProductBySlug(slug);
        setProduct(productDetail[0]);
    }, [slug]);

    const handleAddToCart = (value) => {
        console.log(value);
    };
    return (
        <main className="productDetail-page">
            <Visual title={product.title} />
            <div className="section">
                <div className="container">
                    <section className="flame">
                        <div className="flame__image">
                            <Slider className="slider__top" {...settings}>
                                {product.images &&
                                    product.images.map((item, index) => (
                                        <figure key={index}>
                                            <img src={item} alt="" />
                                        </figure>
                                    ))}
                            </Slider>
                        </div>
                        <div className="flame__content">
                            <h2 className="flame__heading">{product.title}</h2>
                            <Rating star={3} />
                            {product.category &&
                                product.category.map((item, index) => (
                                    <Link key={index} to="" className="flame__category">
                                        {item.name}
                                    </Link>
                                ))}
                            <div className="flame__info">
                                {product.sku && (
                                    <dl>
                                        <dt>SKU:</dt>
                                        <dd>{product.sku}</dd>
                                    </dl>
                                )}
                                {product.weight && (
                                    <dl>
                                        <dt>Weight:</dt>
                                        <dd>{product.weight}</dd>
                                    </dl>
                                )}
                                {product.shipping && (
                                    <dl>
                                        <dt>Shipping:</dt>
                                        <dd>{product.shipping}</dd>
                                    </dl>
                                )}
                            </div>
                            {product.price && <span className="flame__price">${product.price}</span>}
                            <FormAddToCart onChange={handleAddToCart} />
                        </div>
                    </section>
                    <section className="box">
                        <h3 className="box__ttl">Description</h3>
                        <p className="box__desc">
                            DESCRIPTION Enjoy wireless convenience and crystal-clear audio when talking on your iPhone.
                            The iPhone Bluetooth Headset features a single button that lets you make and receive phone
                            calls simply and intuitively. And the innovative design is sure to turn a few heads.
                        </p>
                        <h4 className="box__ttl01">Features</h4>
                        <ul className="box__list">
                            <li>Up to 5.5 hours of talk time; up to 72 hours of standby time*</li>
                            <li>Lightweight earpiece for a secure, comfortable fit in left or right ear</li>
                            <li>Convenient autopairing with iPhone</li>
                            <li>Stylish anodized aluminum casing</li>
                        </ul>
                    </section>
                </div>
            </div>
        </main>
    );
}

export default ProductDetail;
