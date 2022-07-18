import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { getProductBySlug } from '../../assets/data/products';
import Rating from '../../components/Rating';
import Visual from '../../components/Visual';
import { addItemToCart } from '../../features/cart/cartSlice';
import FormAddToCart from './components/FormAddToCart';
import { toast } from 'react-toastify';
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
    const dispatch = useDispatch();
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
        const action = addItemToCart({
            id: product.id,
            product,
            quantity: value,
        });
        dispatch(action);
        toast.success('Add product successfully!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    return (
        <main className="productDetail-page">
            <Visual title={product.title} />
            <div className="section">
                <div className="container">
                    <section className="productInfo">
                        <div className="productInfo__image">
                            <Slider className="slider__top" {...settings}>
                                {product.images &&
                                    product.images.map((item, index) => (
                                        <figure key={index}>
                                            <img src={item} alt="" />
                                        </figure>
                                    ))}
                            </Slider>
                        </div>
                        <div className="productInfo__content">
                            <h2 className="productInfo__heading">{product.title}</h2>
                            <Rating star={3} />
                            {product.category &&
                                product.category.map((item, index) => (
                                    <Link key={index} to="" className="productInfo__category">
                                        {item.name}
                                    </Link>
                                ))}
                            <div className="productInfo__info">
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
                            {product.price && <span className="productInfo__price">${product.price}</span>}
                            <FormAddToCart onChange={handleAddToCart} />
                        </div>
                    </section>
                    <section className="productDesc">
                        <h3 className="productDesc__ttl">Description</h3>
                        <p className="productDesc__desc">
                            DESCRIPTION Enjoy wireless convenience and crystal-clear audio when talking on your iPhone.
                            The iPhone Bluetooth Headset features a single button that lets you make and receive phone
                            calls simply and intuitively. And the innovative design is sure to turn a few heads.
                        </p>
                        <h4 className="productDesc__ttl01">Features</h4>
                        <ul className="productDesc__list">
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
