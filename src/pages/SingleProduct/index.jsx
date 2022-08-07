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
import ProductDetail from '../../components/ProductDetail';
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
function SingleProduct(props) {
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
                    <ProductDetail product={product} onSubmit={handleAddToCart} />
                </div>
            </div>
        </main>
    );
}

export default SingleProduct;
